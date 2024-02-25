'use client'

import { useState, useEffect, ChangeEvent } from 'react';

const Calculator = () => {
  const [ethValue, setEthValue] = useState<number | ''>('');
  const [dailyInterestValue, setDailyInterestValue] = useState<number | ''>('');
  const [daysValue, setDaysValue] = useState<number | ''>('');
  
  const [result, setResult] = useState<number>(0);

  const [isEthValid, setIsEthValid] = useState<boolean>(true);
  const [isInterestValid, setIsInterestValid] = useState<boolean>(true);
  const [isDaysValid, setIsDaysValid] = useState<boolean>(true);

  useEffect(() => {
    const isValid = isEthValid && isInterestValid && isDaysValid;
    if (ethValue !== '' && dailyInterestValue !== '' && daysValue !== '' && isValid) {
      setResult(ethValue * (dailyInterestValue / 100) * daysValue);
    } else {
      setResult(0);
    }
  }, [ethValue, dailyInterestValue, daysValue, isEthValid, isInterestValid, isDaysValid]);

  const validateEth = (value: number | '') => {
    setIsEthValid(typeof value === 'number' && value >= 0);
  };

  const validateInterest = (value: number | '') => {
    setIsInterestValid(typeof value === 'number' && value >= 0);
  };

  const validateDays = (value: number | '') => {
    setIsDaysValid(typeof value === 'number' && value >= 0);
  };

  const handleEthInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? '' : parseFloat(e.target.value);
    setEthValue(value);
    validateEth(value);
  };

  const handleInterestInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? '' : parseFloat(e.target.value);
    setDailyInterestValue(value);
    validateInterest(value);
  };

  const handleDaysInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? '' : parseFloat(e.target.value);
    setDaysValue(value);
    validateDays(value);
  };

  return (
    <div>
      {/* ETH Input */}
      <p className="text-sm mb-2">type the <span className="text-blue-500">eth (pay later amount)</span> in the input box below</p>
      <input
        type="number"
        className={`mb-2 w-25 py-1 text-lg text-center border ${isEthValid ? 'border-gray-300' : 'border-red-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        value={ethValue}
        min="0"
        onChange={handleEthInputChange}
      />
      {!isEthValid && <p className="text-red-500 text-sm">Please enter a valid ETH amount (&gt;=0).</p>}

      {/* Daily Interest Input */}
      <p className="text-sm mb-2">type the <span className="text-blue-500">daily interest %</span> in the input box below</p>
      <input
        type="number"
        className={`mb-2 w-25 py-1 text-lg text-center border ${isInterestValid ? 'border-gray-300' : 'border-red-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        value={dailyInterestValue}
        min="0"
        onChange={handleInterestInputChange}
      />
      {!isInterestValid && <p className="text-red-500 text-sm">Please enter a valid interest rate (&gt;=0%).</p>}

      {/* Days Input */}
      <p className="text-sm mb-2">type the <span className="text-blue-500">days</span> in the input box below</p>
      <input
        type="number"
        className={`mb-2 w-25 py-1 text-lg text-center border ${isDaysValid ? 'border-gray-300' : 'border-red-500'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
        value={daysValue}
        min="0"
        onChange={handleDaysInputChange}
      />
      {!isDaysValid && <p className="text-red-500 text-sm">Please enter a valid number of days (&gt;=0).</p>}

      {result > 0 && (
        <div className="text-2xl mb-2">
          <p className="text-sm mb-2">Result</p>
          <p className="text-sm mb-2">{result} ETH</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
