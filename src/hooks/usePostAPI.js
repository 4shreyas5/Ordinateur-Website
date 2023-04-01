import useAPICall from "hooks/useAPICall";
// import en from "../../../Lang/en.json";

const usePostData = (url) => {
  const [data, error, isLoading, callPostData, setSuccessData, setError] =
    useAPICall(undefined, "");

  const defaultFallback = () => {
    // setError(en.something_went_wrong);
    setSuccessData(undefined);
  };

  const statusObj = [
    {
      status_code: 200,
      status_text: "OK",
      callBack: (res) => {
        const data = res.data;
        console.log("inside usePostData", res);
        if (data && typeof data === "object") {
          setSuccessData(res.data);
        } else {
          defaultFallback();
        }
      },
    },
    {
      status_text: "Bad Request",
      status_code: 400,
      callBack: defaultFallback,
    },
    {
      status_text: "Internal Server Error",
      status_code: 500,
      callBack: defaultFallback
    }
  ];

  const postData = (data) => {
    // const url = "http://127.0.0.1:8000/accounts/login/";
    callPostData({
      url,
      method: "POST",
      statusObj,
      defaultFallback,
      body: data,
    });
  };
  return [data, error, isLoading, postData, setSuccessData, setError];
};

export default usePostData;
