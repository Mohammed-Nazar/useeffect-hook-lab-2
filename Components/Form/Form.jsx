export default function Form({IV, setIV, gUI, warn}) {


  return (
    <form className="flex flex-col">
      <h3 className="font-bold font-mono self-center">Search user Github</h3>
      <div className="mb-3">
        <label className="font-mono">User name</label>
        <input onChange={(e)=> setIV(e.target.value)} value={IV}  type="text" className="form-control font-mono block p-1 outline-none border rounded-md w-[250px]" placeholder="Type username" />
        {warn}
      </div>
      <button onClick={(e)=>{
        e.preventDefault()
        if(IV) gUI();
      }} className="bg-gray-900 py-[2px] px-4 text-white font-bold rounded">Search</button>
    </form>
  );
}
