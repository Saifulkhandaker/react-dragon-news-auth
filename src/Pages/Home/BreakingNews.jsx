import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex ">
      <button className="btn rounded-sm bg-[#D72050] text-white">
        Breaking News
      </button>
      <Marquee className="bg-[#F3F3F3]" pauseOnHover={true} speed={100}>
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
