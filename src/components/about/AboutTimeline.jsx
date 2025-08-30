// import * as React from 'react';
import React, { useContext } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { AppContext } from "../../context/datacontext";
const AboutTimeline = () => {
    const { darkMode } = useContext(AppContext);
    const cardStyle = {
        backdropFilter: "blur(5px)",
        borderRadius: "10px",
        boxShadow: `
      rgba(0, 0, 0, 0.07) 0px 0.706592px 0.706592px -0.583333px,
      rgba(0, 0, 0, 0.07) 0px 1.80656px 1.80656px -1.16667px,
      rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -1.75px,
      rgba(0, 0, 0, 0.06) 0px 6.8656px 6.8656px -2.33333px,
      rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -2.91667px,
      rgba(0, 0, 0, 0.03) 0px 30px 30px -3.5px,
      rgb(255, 255, 255) 0px 0px 1px 0px inset
    `,
        opacity: 1,
        borderBottom: "2px solid rgba(255, 255, 255, 0.3)",
        borderLeft: "0px solid",
        borderRight: "0px solid",
    };
    return (
        <div
            className={`flex justify-center flex-col gap-24 items-center w-full py-20  ${!darkMode
                ? "bg-[rgba(222,222,222,0.9)]"
                : "bg-[rgba(69,69,69,1)] inset-0"
                }`}
        >
            <h2 className="text-4xl font-bold">Academic Journey</h2>
            <div
                className="xl:w-4/5 3xl:w-3/5 w-full flex lg:flex-row flex-col gap-4 p-4
  "
            >
                <Timeline position="alternate-reverse">
                    <TimelineItem>
                     <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            10:00 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                            <TimelineDot color="secondary">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Repeat
                            </Typography>
                            <Typography>Because this is the life you love!</Typography>
                        </TimelineContent>
                    </TimelineItem>
                   
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            10:00 am
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                Code
                            </Typography>
                            <Typography>Because it&apos;s awesome!</Typography>
                        </TimelineContent>
                    </TimelineItem>
                   
                
                </Timeline>
            </div>
        </div>
    );
};

export default AboutTimeline