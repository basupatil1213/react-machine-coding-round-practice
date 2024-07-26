import { useRef } from "react"

const correctOTP = 1234;

const OtpForm = () => {
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && index > 0 && e.target.value.length === 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleOtpValidation = () => {
    const enteredOtp = inputRefs.current.map(input => input.value).join('');
    if (parseInt(enteredOtp) === correctOTP) {
        const verifyButton = document.querySelector('button');
        verifyButton.textContent = 'Verified';
        verifyButton.style.backgroundColor = 'green';
        inputRefs.current.forEach(input => {
            input.style.borderColor = 'green';
        });
    } else {
        const verifyButton = document.querySelector('button');
        verifyButton.textContent = 'Verification failed';
        verifyButton.style.backgroundColor = 'red';
        inputRefs.current.forEach(input => {
            input.style.borderColor = 'red';
        });
        setTimeout(() => {
            inputRefs.current.forEach(input => {
                input.value = '';
            });
            inputRefs.current[0].focus();
        }, 1000);
    }
    }
    return (
        <div className="flex justify-around items-center gap-4 bg-[#faf7f8] flex-col p-20 rounded-xl">
            <h1 className="text-[40px] font-semibold">Mobile Phone Verification</h1>
            <p className="text-[#c4c4c4] text-[24px] text-wrap text-center">Enter the 4-digit verification code that was sent to <br /> your phone number.</p>
            <div className="otp-input flex justify-around gap-6 ">
            {Array.from({ length: 4 }, (_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    ref={el => (inputRefs.current[index] = el)}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="bg-[#dde2ef] h-[90px] w-[80px] rounded-lg text-[30px] text-center border-2"
                />
            ))}
            </div>
        <button className="bg-[#102d4e] text-white px-36 py-5 rounded-lg" onClick={handleOtpValidation}>Verify Account</button>
            <p className="text-[#c1c1c1] text-[24px]">Didn&apos;t receive code? <a href="#" className="text-[#163452]">Resend</a></p>
        </div>
    )
}

export default OtpForm