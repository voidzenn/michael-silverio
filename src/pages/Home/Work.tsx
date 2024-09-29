const Work = () => {
  return (
    <div className="mx-60 my-32">
      <h4 className="text-xl font-medium">Work</h4>
      <h5 className="text-lg font-normal mt-2">Delivered features</h5>
      <h5 className="text-md font-normal mt-2">Backend</h5>
      <div className="mt-10 flex w-full gap-10">
        <div className="w-1/3">
          <div className="card bg-base-100">
            <figure>
              <img src="https://picsum.photos/300/200?grayscale" alt="img" />
            </figure>
            <div className="card-body">test</div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="card bg-base-100">
            <figure>
              <img src="https://picsum.photos/300/200?grayscale" alt="img" />
            </figure>
            <div className="card-body">test</div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="card bg-base-100">
            <figure>
              <img src="https://picsum.photos/300/200?grayscale" alt="img" />
            </figure>
            <div className="card-body">test</div>
          </div>
        </div>
      </div>
      <h5 className="font-normal mt-2">Frontend</h5>
    </div>
  );
}

export default Work;
