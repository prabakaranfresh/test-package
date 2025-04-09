type Props = {
  children?: React.ReactNode;
};

const VirtualAgent = ({ children }: Props) => {
  return (
    <>
      <div style={{ 
          border: "1px solid black", 
          padding: "32px", 
          wordBreak: "break-word",
          marginBottom: "16px"}}>
        <p>{children}</p>
      </div>
      <strong>Rendering from VA-As-A-Service</strong>
    </>
  );
};

export default VirtualAgent;