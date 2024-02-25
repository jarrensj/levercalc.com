'use client'

import { useState, useEffect, ChangeEvent } from 'react';

const Calculator = () => {
  const [ethValue, setEthValue] = useState<number | ''>('');
  const [dailyInterestValue, setDailyInterestValue] = useState<number | ''>('');
  const [daysValue, setDaysValue] = useState<number | ''>('');

  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    if (ethValue !== '' && dailyInterestValue !== '' && daysValue !== '') {
      setResult(ethValue * (dailyInterestValue / 100) * daysValue);
    } else {
      setResult(0);
    }
  }, [ethValue, dailyInterestValue, daysValue]);

  const handleEthInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEthValue(value === '' ? '' : parseFloat(value));
  };

  const handleInterestInputChange = (e: ChangeEvent<HTMLInputElement>) => { 
    const value = e.target.value;
    setDailyInterestValue(value === '' ? '' : parseFloat(value));
  }

  const handleDaysInputChange = (e: ChangeEvent<HTMLInputElement>) => { 
    const value = e.target.value;
    setDaysValue(value === '' ? '' : parseFloat(value));
  }

  return (
    <div>
      <p className="text-sm mb-2">
        type the 
        <span className="text-blue-500"> eth (pay later amount) </span>
        in the input box below
      </p>
      <input 
       type="number"
       className="mb-2 w-25 py-1 text-lg text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       value={ethValue}
       min="0"
       onChange={handleEthInputChange}
      />
      <p className="text-sm mb-2">
        type the 
        <span className="text-blue-500"> daily interest % </span>
        in the input box below
      </p>
      <input 
       type="number"
       className="mb-2 w-25 py-1 text-lg text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       value={dailyInterestValue}
       min="0"
       onChange={handleInterestInputChange}
      />
      <p className="text-sm mb-2">
        type the 
        <span className="text-blue-500"> days </span>
        in the input box below
      </p>
      <input 
       type="number"
       className="mb-2 w-25 py-1 text-lg text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
       value={daysValue}
       min="0"
       onChange={handleDaysInputChange}
      />
      {result > 0 && (
        <div className="text-2xl mb-2">
          <p className="text-sm mb-2">result</p>
          <p className="text-sm mb-2">{result} eth</p>
        </div>
      )
      }
    </div>
  );
};

export default Calculator;