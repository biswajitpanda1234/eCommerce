import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Register = () => {
  return (
    <div className="flex flex-auto justify-center items-center h-[100vh] w-full bg-[#e4f0f7] min-w-fit min-h-max">
      <div className="flex flex-col w-1/4 h-4/5 p-4 justify-evenly shrink items-center bg-[#ECEEF0] shadow-[-4px_-4px_19px_11px_rgba(255,255,255,1),14px_19px_36px_8px_rgba(0,0,0,0.5)] rounded-[45px] min-h-[480px] min-w-max">
        <div className="rounded-full w-24 h-24 p-3 flex shrink bg-[#ECEEF0] shadow-[-6px_-3px_17px_0px_rgba(255,255,255,1),7px_6px_13px_0px_rgba(0,0,0,0.31)]">
        <PersonIcon style={{fontSize:"500%", color:"grey"}}/> 
        </div>
        <div className="flex flex-col w-full items-center mt-4">
          <div className="flex flex-row items-center bg-[#ECEEF0] w-4/5 h-[45px] px-6 shadow-[-4px_-4px_12px_0px_rgba(255,255,255,1)_inset,4px_2px_12px_0px_rgba(0,0,0,0.25)_inset] rounded-3xl hover:scale-105  hover:border-sky-600  duration-500 ">
            <span>
            <PersonIcon/>
            </span>
            <input
              type="username"
              placeholder="username"
              className="outline-none bg-transparent mx-3"
            />
          </div>
          <div className="px-10 hidden">
            <p className="text-red-500">
              The username you entered already taken
            </p>
          </div>
          <div className="flex flex-row items-center bg-[#ECEEF0] w-4/5 h-[45px] px-6 shadow-[-4px_-4px_12px_0px_rgba(255,255,255,1)_inset,4px_2px_12px_0px_rgba(0,0,0,0.25)_inset] rounded-3xl hover:scale-105  hover:border-sky-600  duration-500 mt-4">
            <span>
              <PersonIcon/>
            </span>
            <input
              type="email"
              placeholder="confirm username"
              className="outline-none bg-transparent mx-3"
            />
          </div>
          <div className="px-10 hidden">
            <p className="text-red-500">
              The email you entered is already connected to an account
            </p>
          </div>
          <div className="flex flex-row items-center bg-[#ECEEF0] w-4/5 h-[45px] px-6 hover:scale-105 duration-500 shadow-[-4px_-4px_12px_0px_rgba(255,255,255,1)_inset,4px_2px_12px_0px_rgba(0,0,0,0.25)_inset] rounded-3xl mt-4">
            <span>
              <LockIcon />
            </span>
            <input
              type="password"
              placeholder="password"
              className="outline-none bg-transparent mx-3"
            />
          </div>
          <div className="flex flex-row items-center bg-[#ECEEF0] w-4/5 h-[45px] px-6 hover:scale-105 duration-500 shadow-[-4px_-4px_12px_0px_rgba(255,255,255,1)_inset,4px_2px_12px_0px_rgba(0,0,0,0.25)_inset] rounded-3xl mt-4">
            <span>
              <LockIcon />
            </span>
            <input
              type="password"
              placeholder="confirm password"
              className="outline-none bg-transparent mx-3"
            />
          </div>
          <div className="px-10 hidden">
            <p className="text-red-500">
              Password must be 8 digit and contains capital,number,symbol
            </p>
          </div>
          <button className="w-4/5 h-[45px] bg-[#4482BF] rounded-3xl text-white font-semibold mt-4 hover:scale-105 duration-500 shadow-[-5px_-4px_16px_0px_rgba(255,255,255,1),4px_5px_13px_0px_rgba(0,0,0,0.63)]">
            Register
          </button>
          <span className="text-xs text-gray-500 font-semibold mt-3">
            Already have an account ?
            <a href="/login" className="text-sky-600 ml-1">
              Login
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Register;
