export default function SkillSlider({ images = [] }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-4 px-4 py-6 snap-x snap-mandatory overflow-x-auto">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="min-w-[100px] h-[100px] flex-shrink-0 snap-start rounded-xl p-1 bg-white/10 backdrop-filter backdrop-blur-3xl border border-white/20 shadow-md"
          >
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`Slide ${idx}`}
                className="w-full h-full object-contain mix-blend-overlay"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
