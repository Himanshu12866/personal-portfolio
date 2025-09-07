import React, { useContext } from 'react'
import { AppContext } from '../../context/datacontext';
import reactlogo from "../../assets/images/react.png"
import CodeIcon from '@mui/icons-material/Code';
import GridViewIcon from '@mui/icons-material/GridView';
const SkillsCards = () => {
    const { darkMode } = useContext(AppContext);

    return (
        <div
            className={`flex justify-center flex-col gap-24 items-center w-full py-20  `}
        >
            <h2 className="text-4xl font-bold">Frontend</h2>
            <div className="xl:w-4/5 3xl:w-3/5 w-full xl:p-0 p-4 grid gap-6 lg:grid-cols-4 grid-cols-1  ">
                <div
                    className={` flex flex-col justify-between gap-5 p-4 px-8 z-[3] rounded-[20px] relative  pb-6 backdrop-blur-sm ${!darkMode
                        ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                        : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                        }`}

                >cabnkcbwe</div>
                <div
                    className={` flex flex-col justify-between gap-5 p-4 px-8 z-[3] rounded-[20px] relative  pb-6 backdrop-blur-sm ${!darkMode
                        ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                        : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                        }`}

                >cabnkcbwe</div>
                <div
                    className={` flex flex-col justify-between p-4 px-8 z-[3] rounded-[20px] relative  pb-6 backdrop-blur-sm ${!darkMode
                        ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                        : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                        }`}

                >

                    <div className='flex justify-center items-center pt-4 pb-5'>
                        <img src={reactlogo} className='w-24 h-24' alt='react-log' />
                    </div>
                    <div className={`h-[1px] ${!darkMode
                        ? "bg-[rgba(121,121,121,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgba(255,255,255 ,0.3)_0px_3px_1px_0px_inset]"
                        : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                        }`}>
                    </div>
                    <h3 className='flex flex-row  items-center py-3 gap-4'>
                        <CodeIcon fontSize='30px' className='text-3xl'/> <span className='text-2xl'>
                            React JS
                        </span>
                    </h3>
                    <h3 className='flex flex-row  items-center pb-3 gap-4'>
                        <GridViewIcon fontSize='30px' className='text-3xl'/> <span className='text-xl'>
                          Frontend Library
                        </span>
                    </h3>
                </div>
                <div
                    className={` flex flex-col justify-between gap-5 p-4 px-8 z-[3] rounded-[20px] relative  pb-6 backdrop-blur-sm ${!darkMode
                        ? "bg-[rgba(245,245,245,0.9)] rounded-xl shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                        : "bg-[#00000052] rounded-xl shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                        }`}

                >dednwubdie</div>
            </div>
        </div>
    )
}

export default SkillsCards