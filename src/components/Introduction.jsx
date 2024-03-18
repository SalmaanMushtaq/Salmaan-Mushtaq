function Introduction() {
  return (
    <div className="mt-10 flex justify-between tracking-wide">
      <div className="leftContent flex flex-col justify-end">
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
      <div className="rightContent">
        <img
          src="/images/salm.jpeg"
          alt=""
          className="h-[60vh] rounded-t-full"
        />
      </div>
    </div>
  );
}

export default Introduction;
