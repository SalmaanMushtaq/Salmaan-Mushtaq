import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
function DownloadCV() {
  return (
    <div className="mt-20 mb-10 gap-4 flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl">Interested in my work?</h1>
      <div className="flex gap-3 justify-center items-center">
        <a
          href="../assets/cv/Salmaan-Mushtaq.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 px-6 bg-basic rounded-full flex justify-between gap-3 items-center font-semibold"
        >
          View CV <FaRegEye className="bg-basic text-xl" />
        </a>
        <a
          href="../assets/cv/SalmaanMushtaq.pdf"
          download="Salmaan-Mushtaq.pdf"
          className="p-1 px-6 bg-basic rounded-full flex justify-between gap-3 items-center font-semibold"
        >
          Download CV <IoCloudDownloadOutline className="bg-basic text-xl" />
        </a>
      </div>
    </div>
  );
}

export default DownloadCV;
