import React, {setState} from 'react';
 
 const Login = () => {
     return (
         <div>
             <p>a</p>
         </div>
     );
 };

useEffect(() => {
    const LoginVer = async () => {
        const response = await fetch(
            "https://strangers-things.herokuapp.com/api/2022-FTB-ET-WEB-FT/users/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user: {
                  username,
                  password,
                },
              }),
            }
          );
          const data = await response.json();
          return data;
    };
    LoginVer();
  }, []);

export default Login