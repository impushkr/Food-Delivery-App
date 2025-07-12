
export default function Nav() {
  return (
    <>
      <div className="flex justify-around mt-12 text-white">
        <div className="flex gap-4 items-center text-2xl font-bold">
          <img src="/swiggylogo.png" alt="Logo" className="size-12 border-2 rounded-2xl" />
          <h2>Swiggy</h2>
        </div>
        <div className="flex items-center gap-4 ">
          <a href="#" className="text-sm">
            <strong>Swiggy Corporate</strong>
          </a>
          <a href="#" className="text-sm">
            <strong>Partner with us</strong>
          </a>
          <button className="text-lg border h-13 w-38 rounded-2xl">
            <strong>Get the App 🡥 </strong>
          </button>
          <button className="text-lg bg-black h-13 w-38 rounded-2xl">
            <strong>Sign in</strong>
          </button>
        </div>
      </div>
    </>
  );
}
