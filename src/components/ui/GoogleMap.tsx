import { useEffect, useRef, useState } from "react";

interface GoogleMapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom?: number;
  markerTitle?: string;
  className?: string;
}

declare global {
  interface Window {
    google: typeof google;
    initGoogleMap: () => void;
  }
}

export default function GoogleMap({
  apiKey,
  center,
  zoom = 15,
  markerTitle = "Location",
  className = "",
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      setMapLoaded(true);
      return;
    }

    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMap`;
    script.async = true;
    script.defer = true;

    window.initGoogleMap = () => {
      setMapLoaded(true);
    };

    script.onerror = () => {
      setError("Failed to load Google Maps");
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        `script[src*="maps.googleapis.com"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
      delete window.initGoogleMap;
    };
  }, [apiKey]);

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !window.google) return;

    try {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ saturation: -20 }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#2D9CDB" }, { lightness: 40 }],
          },
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      // Add marker
      new window.google.maps.Marker({
        position: center,
        map,
        title: markerTitle,
        animation: window.google.maps.Animation.DROP,
      });
    } catch (err) {
      setError("Failed to initialize map");
    }
  }, [mapLoaded, center, zoom, markerTitle]);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
      >
        <p className="text-gray-500 text-sm">{error}</p>
      </div>
    );
  }

  if (!mapLoaded) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className}`}
      >
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-8 h-8 bg-teal/30 rounded-full mb-2"></div>
          <p className="text-gray-500 text-sm">Loading map...</p>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className={className} />;
}
