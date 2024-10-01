"use client";

import { useState } from "react";

const Likert5 = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { id: 'option1', label: 'Never', image: '/assets/images/question/never.png' },
        { id: 'option2', label: 'Rarely', image: '/assets/images/question/rarely.png' },
        { id: 'option3', label: 'Sometimes', image: '/assets/images/question/sometimes.png' },
        { id: 'option4', label: 'Often', image: '/assets/images/question/often.png' },
        { id: 'option5', label: 'Always', image: '/assets/images/question/always.png' },
    ];

    return (
        <div className="flex gap-x-4 mt-10">
            {options.map(option => (
                <label key={option.id} className="flex items-center">
                    <input
                        type="radio"
                        name="options"
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={() => setSelectedOption(option.id)}
                        className="hidden"
                    />
                    <div className={`bg-[#A8A8A826] rounded-lg text-xxs flex flex-col items-center justify-center w-28 h-auto p-4 ${selectedOption === option.id ? 'border-4 border-[#00B4BE]' : 'border[#A8A8A826]'}` }>
                        <img src={option.image} alt={option.label} className="w-12 h-12 mb-2" />
                        <span>{option.label}</span>
                    </div>
                </label>
            ))}
        </div>
    );
}

export default Likert5;
