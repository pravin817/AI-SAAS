import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard Page (Protected)</p>

      {/* After sign-out redirect to the home page  */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
