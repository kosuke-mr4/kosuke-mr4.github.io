export default function Home() {
  return (
    <div className="mx-auto p-8 sm:px-6 md:px-8">
      <div>
        <img
          src="/images/genbaneko.jpeg"
          className="rounded-xl md:mx-0 mx-auto w-64"
        />
      </div>
      <div className="pt-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-4">
          I AM
        </h1>
        <div className="text-lg md:text-xl font-bold mb-4">Kosuke murakami</div>
        <div className="text-lg md:text-xl mb-4">
          A master student of Computer Science at Univ. Tsukuba.
          <br />I will add more content to my self-introduction. :)
        </div>
      </div>
    </div>
  );
}
