function Introduction() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row lg:flex-row justify-between tracking-wide items-center gap-4">
      <div className="flex flex-col justify-end sm:w-full lg:w-2/3 md:w-full lg:pl-[15rem]">
        <p>
          Welcome <br /> I&apos;m{" "}
          <span className="rounded-full inline-block font-bold border-b-8 border-basic w-10"></span>
        </p>

        <h1 className="font-bold text-6xl text-basic leading-normal">
          Salmaan
        </h1>
        <h3 className="font-semibold text-3xl leading-tight">Mushtaq</h3>
        <h5 className="text-3xl font-light text-basic mt-4">
          Front End Developer
        </h5>
      </div>
      <div className=" flex justify-center  items-center sm:w-full lg:w-1/2 md:w-full">
        <img
          src="../assets/images/salm.jpeg"
          alt=""
          className="h-[66vh] rounded-t-full"
        />
      </div>
    </div>
  );
}

export default Introduction;
