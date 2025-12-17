import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, CheckCircle2 } from "lucide-react";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

const networkHubs = [
  {
    id: "uk",
    name: "United Kingdom",
    city: "Bristol",
    partner: "Bristol NHS Medical Staff",
    status: "Active PoC",
    description: "Clinical feedback and real-world validation in an advanced market with over 60% NHS AI adoption. Current discussions for brain tumor observation AI project.",
    position: { top: "28%", left: "47%" },
    coordinates: { lat: 51.4545, lng: -2.5879 },
    flag: "🇬🇧"
  },
  {
    id: "chile",
    name: "Chile",
    city: "Santiago",
    partner: "BIOANDINA SPA & Ministry of Health",
    status: "MOU Signed",
    description: "Verification and pilot application aligning with government-led healthcare digitalization, serving as a gateway to the Latin American market.",
    position: { top: "72%", left: "28%" },
    coordinates: { lat: -33.4489, lng: -70.6693 },
    flag: "🇨🇱"
  },
  {
    id: "brazil",
    name: "Brazil",
    city: "São Paulo",
    partner: "Local Medical Institutions",
    status: "Active PoC",
    description: "Conducting validation to meet local registration and sales requirements in the largest South American medical market. ANVISA registration support available.",
    position: { top: "62%", left: "35%" },
    coordinates: { lat: -23.5505, lng: -46.6333 },
    flag: "🇧🇷"
  }
];

// Seoul headquarters coordinates
const SEOUL_COORDS = { lat: 37.5665, lng: 126.978 };

export default function GlobalNetworkMap() {
  const [selectedHub, setSelectedHub] = useState<typeof networkHubs[0] | null>(null);
  const [useGoogleMap, setUseGoogleMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Initialize Google Maps if API key is available
  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY || !useGoogleMap) return;

    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        setMapLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => setMapLoaded(true);
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, [useGoogleMap]);

  // Render Google Map when loaded
  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 20, lng: 0 },
      zoom: 2,
      styles: [
        { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#a3ccff" }] },
        { featureType: "landscape", elementType: "geometry.fill", stylers: [{ color: "#e5e7eb" }] },
        { featureType: "administrative.country", elementType: "geometry.stroke", stylers: [{ color: "#d1d5db" }] },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        { featureType: "transit", stylers: [{ visibility: "off" }] },
      ],
      disableDefaultUI: true,
      zoomControl: true,
    });

    // Add Seoul marker
    new window.google.maps.Marker({
      position: SEOUL_COORDS,
      map,
      title: "GBPL Headquarters - Seoul",
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "#0A2540",
        fillOpacity: 1,
        strokeColor: "#0A2540",
        strokeWeight: 2,
      },
    });

    // Add hub markers
    networkHubs.forEach((hub) => {
      const marker = new window.google.maps.Marker({
        position: hub.coordinates,
        map,
        title: `${hub.city}, ${hub.name}`,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#2D9CDB",
          fillOpacity: 1,
          strokeColor: "#2D9CDB",
          strokeWeight: 2,
        },
        animation: window.google.maps.Animation.DROP,
      });

      marker.addListener("click", () => {
        setSelectedHub(hub);
      });

      // Draw connection line from Seoul
      new window.google.maps.Polyline({
        path: [SEOUL_COORDS, hub.coordinates],
        geodesic: true,
        strokeColor: "#2D9CDB",
        strokeOpacity: 0.5,
        strokeWeight: 1,
        map,
      });
    });
  }, [mapLoaded]);

  return (
    <section className="py-24 bg-off-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-teal uppercase tracking-wider">Global Network</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2 mb-4">
            Exclusive PoC Network
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-credibility partnerships with national and public healthcare institutions across three strategic regions
          </p>
          {GOOGLE_MAPS_API_KEY && (
            <button
              onClick={() => setUseGoogleMap(!useGoogleMap)}
              className="mt-4 text-sm text-teal hover:underline"
            >
              {useGoogleMap ? "View Simplified Map" : "View Interactive Google Map"}
            </button>
          )}
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-3xl shadow-lg p-8 overflow-hidden"
        >
          {/* Google Map or SVG Map */}
          {useGoogleMap && GOOGLE_MAPS_API_KEY ? (
            <div ref={mapRef} className="aspect-[2/1] min-h-[400px] w-full rounded-xl" />
          ) : (
          /* SVG World Map */
          <div className="relative aspect-[2/1] min-h-[400px]">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}
            >
              {/* Simplified World Map Paths */}
              <g fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="0.5">
                {/* North America */}
                <path d="M150,120 Q200,100 250,110 L280,130 Q300,150 290,180 L260,200 Q240,220 200,210 L170,190 Q140,170 150,120Z" />
                {/* South America */}
                <path d="M250,280 Q280,260 300,280 L310,320 Q320,360 300,400 L270,420 Q240,400 250,350 L260,300 Q250,290 250,280Z" />
                {/* Europe */}
                <path d="M450,100 Q500,90 530,110 L550,140 Q560,160 540,180 L500,190 Q470,180 460,150 L450,120 Q445,110 450,100Z" />
                {/* Africa */}
                <path d="M470,200 Q510,190 540,210 L560,260 Q570,310 550,360 L510,380 Q470,370 460,320 L450,260 Q455,220 470,200Z" />
                {/* Asia */}
                <path d="M600,100 Q700,80 800,100 L850,150 Q880,200 850,250 L780,280 Q700,290 650,260 L600,220 Q570,170 600,100Z" />
                {/* Australia */}
                <path d="M780,350 Q830,340 860,360 L880,400 Q870,430 840,440 L800,430 Q770,410 780,350Z" />
                {/* UK Detail */}
                <path d="M460,115 Q470,110 475,120 L478,135 Q475,145 465,145 L458,138 Q455,125 460,115Z" fill="#CBD5E1" />
              </g>

              {/* Connection Lines */}
              <g stroke="#2D9CDB" strokeWidth="1" strokeDasharray="4,4" opacity="0.5">
                {/* Seoul to UK */}
                <path d="M750,150 Q600,100 470,125" fill="none" />
                {/* Seoul to Chile */}
                <path d="M750,150 Q500,300 280,350" fill="none" />
                {/* Seoul to Brazil */}
                <path d="M750,150 Q550,280 320,320" fill="none" />
              </g>

              {/* Seoul Marker */}
              <g transform="translate(750, 150)">
                <circle r="8" fill="#0A2540" />
                <circle r="12" fill="none" stroke="#0A2540" strokeWidth="2" opacity="0.5" />
                <text x="15" y="5" fontSize="12" fill="#0A2540" fontWeight="600">Seoul</text>
              </g>
            </svg>

            {/* Interactive Markers */}
            {networkHubs.map((hub) => (
              <motion.button
                key={hub.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ top: hub.position.top, left: hub.position.left }}
                onClick={() => setSelectedHub(hub)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <div className="w-6 h-6 bg-teal rounded-full pulse-marker shadow-lg" />
                  <div className="absolute -inset-2 bg-teal/20 rounded-full animate-ping" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-navy text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {hub.city}, {hub.name}
                </div>
              </motion.button>
            ))}
          </div>
          )}

          {/* Hub Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {networkHubs.map((hub) => (
              <motion.button
                key={hub.id}
                onClick={() => setSelectedHub(hub)}
                className="text-left p-6 bg-gray-50 rounded-xl hover:bg-teal/5 hover:border-teal border border-transparent transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{hub.flag}</span>
                  <div>
                    <h4 className="font-semibold text-navy">{hub.name}</h4>
                    <p className="text-sm text-gray-500">{hub.city}</p>
                  </div>
                </div>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  hub.status === "Active PoC" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                }`}>
                  {hub.status}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Slide-out Panel */}
      <AnimatePresence>
        {selectedHub && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setSelectedHub(null)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-8">
                <button
                  onClick={() => setSelectedHub(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{selectedHub.flag}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-navy">
                      {selectedHub.name}
                    </h3>
                    <p className="text-gray-500">{selectedHub.city}</p>
                  </div>
                </div>

                <span className={`inline-block px-3 py-1 text-sm rounded-full mb-6 ${
                  selectedHub.status === "Active PoC" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                }`}>
                  {selectedHub.status}
                </span>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Building2 className="w-4 h-4" />
                      Partner Institution
                    </div>
                    <p className="font-medium text-navy">{selectedHub.partner}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Strategic Purpose
                    </div>
                    <p className="text-gray-600 leading-relaxed">{selectedHub.description}</p>
                  </div>

                  <div className="pt-6 border-t">
                    <h4 className="font-semibold text-navy mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        National/public institution partnership for credibility
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        Real clinical environment testing
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        Local regulatory pathway support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
