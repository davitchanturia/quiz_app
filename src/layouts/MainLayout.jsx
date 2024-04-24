export const MainLayout = (props) => {
  return (
    <div className="w-full h-screen">
      <nav className="w-full bg-blue-600 py-3">
        <div className="w-full max-w-7xl mx-auto text-white">Quiz app</div>
      </nav>

      {props.children}
    </div>
  );
};
