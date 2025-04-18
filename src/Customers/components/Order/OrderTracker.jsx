import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

export const OrderTracker = ({ step }) => {
    const steps = ['Placed', 'Order Confirmed', 'Shipped', 'Out for Delivery', 'Delivered'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const handleNext = () => {
        let newCompleted = completed;
        setActiveStep((prev) => prev + 1);
        setCompleted(newCompleted);
    };

    const handleBack = () => {
        setActiveStep((step) => step - 1);
    };

    return (
        <Box>
            <Stepper orientation={isSmallScreen ? 'vertical' : 'horizontal'} activeStep={step}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton className='text-sm' color="inherit">
                            <span className="lg:text-sm text-[12px]">
                                {label}
                            </span>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
            </Box> */}
        </Box>
    );
};
