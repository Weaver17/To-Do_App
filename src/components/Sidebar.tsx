import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function Sidebar() {
  const { login, register, isAuthenticated, isLoading, logout, user } =
    useKindeAuth();

  return (
    <section className="flex flex-col  col-[2/3] row-[2/3] bg-[#e3c3f9] border-l border-black/[0.25] px-[25px] pt-[18px] pb-[28px] ">
      <AddTodoForm />
      <div className="mt-auto flex flex-col gap-2 ">
        {isLoading ? (
          <p className="mx-auto mb-[16px]">Loading user...</p>
        ) : isAuthenticated ? (
          <>
            <span className="text-sm mx-auto">
              Logged in as{" "}
              <b>
                {user?.given_name} {user?.family_name}
              </b>
            </span>
            <Button handleClick={logout} buttonType="secondary">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button handleClick={login} buttonType="secondary">
              Login
            </Button>
            <Button handleClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}

export default Sidebar;
