
import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const SkillBar = ({ 
  name, 
  percentage, 
  color = 'bg-portfolio-teal', 
  delay = 0 
}: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (inView) {
      timeout = setTimeout(() => {
        setWidth(percentage);
      }, delay);
    }
    
    return () => clearTimeout(timeout);
  }, [inView, percentage, delay]);

  return (
    <div ref={inViewRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <h4 className="text-sm font-medium">{name}</h4>
        <span className="text-sm text-portfolio-gray">{percentage}%</span>
      </div>
      
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
