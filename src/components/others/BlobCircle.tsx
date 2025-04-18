
type Props = {
  fillColor: string;
}

const BlobAnimation: React.FC<Props>  = ({fillColor = "var(--secondary)"}) => {
  
  
  return (
   <div className="blob">
      <svg viewBox="0 0 700 600" xmlns="http://www.w3.org/2000/svg">

        <path fill = {fillColor} transform="translate(100 100)">
          <animate attributeName="d"
            dur="5000ms"
            repeatCount="indefinite"
            values="M427,349Q364,448,258.5,432.5Q153,417,110,333.5Q67,
            250,108,162.5Q149,75,251.5,72.5Q354,70,422,160Q490,250,427,
            349Z;
            
            M420.5,346Q361,442,248.5,444.5Q136,447,92,348.5Q48,250,91,149Q134,48,239,67.5Q344,87,412,168.5Q480,250,420.5,346Z;
            
            M393.3174,339.45604Q353.95266,428.91208,241.95604,443.49324Q129.95942,458.07439,76.89856,354.0372Q23.83769,250,83.95266,158.06087Q144.06763,66.12173,249.57101,66.99662Q355.07439,67.8715,393.87827,158.93575Q432.68214,250,393.3174,339.45604Z;
            
            M395,334.5Q348,419,252,416Q156,413,104,331.5Q52,250,95.5,154Q139,58,250.5,57.5Q362,57,402,153.5Q442,250,395,334.5Z;
            
            M412,332Q344,414,242,427Q140,440,86,345Q32,250,79.5,143Q127,36,235,62.5Q343,89,411.5,169.5Q480,250,412,332Z;
            
            M427,349Q364,448,258.5,432.5Q153,417,110,333.5Q67,
            250,108,162.5Q149,75,251.5,72.5Q354,70,422,160Q490,250,427,
            349Z">

          </animate>
        </path>
      </svg>
   </div>
  );
};

export default BlobAnimation;