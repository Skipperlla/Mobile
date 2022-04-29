import { ImageParamsProps } from "@components/Auth/ImageCard";
import { ITroubles } from "@screens/Auth/Troubles";
import api from "@utils/api";
import { getStorage, setStorage } from "@utils/storage";
import { AuthDispatch } from "types/auth";
import { IBirthdayNavigationProps } from "types/navigation";

export const userNameCheck =
  (userName: string) => async (dispatch: AuthDispatch) => {
    dispatch({ type: "USER_NAME_CHECK_START" });
    await api(null)
      .post("/Auth/userNameCheck", { userName })
      .then((data) => {
        dispatch({
          type: "USER_NAME_CHECK_SUCCESS",
          status: data.status,
          payload: data.data.message,
        });
        // dispatch({ type: "USER_NAME_CHECK_RESET" });

      })
      .catch((err) => {
        dispatch({
          type: "USER_NAME_CHECK_ERROR",
          status: err.response.status,
          payload: err.response.data.message,
        });
        // dispatch({ type: "USER_NAME_CHECK_RESET" });
      });
  };
interface IRegister { fullName: string, userName: string, email: string, password: string }
export const register =
  (form: IRegister) => async (dispatch: AuthDispatch) => {
    dispatch({ type: "REGISTER_START" });

    await api(null)
      .post("/Auth/register", form)
      .then(async (data) => {
        await setStorage("accessToken", data.data.access_token);
        await setStorage("me", data.data.user);
        dispatch({
          type: "REGISTER_SUCCESS",
          status: data.status,
        });
        dispatch({ type: "REGISTER_RESET" });

      })
      .catch((err) => {
        console.log("err.response", err.response);
        dispatch({
          type: "REGISTER_ERROR",
          status: err.response.status,
          payload: err.response.data.message,
        });
        dispatch({ type: "REGISTER_RESET" });

      });
  };
export const AuthReset = () => async (dispatch: AuthDispatch) => {
  dispatch({ type: "AUTH_RESET" });
};


export const updateProfileRegister =
  (form: string | Date | number) => async (dispatch: AuthDispatch) => {
    dispatch({ type: "UPDATE_PROFILE_REGISTER_START" });
    getStorage("accessToken").then(async (token) => {
      await api(token)
        .post("/Auth/register", { form })
        .then(async (data) => {
          await setStorage("me", data.data.user);
          dispatch({
            type: "UPDATE_PROFILE_REGISTER_SUCCESS",
            status: data.status,
            payload: data.data.message,
          });

        })
        .catch((err) => {
          dispatch({
            type: "UPDATE_PROFILE_REGISTER_ERROR",
            status: err.response.status,
            payload: err.response.data.message,
          });
          dispatch({ type: "UPDATE_PROFILE_REGISTER_RESET" });

        });
    });
  };

export const allTroubles =
  (setTroubles: React.Dispatch<React.SetStateAction<ITroubles[]>>) => async (dispatch: AuthDispatch) => {
    dispatch({ type: "ALL_TROUBLES_START" });
    getStorage("accessToken").then(async (token) => {
      await api(token)
        .get("/Auth/troubles")
        .then(async (data) => {
          setTroubles(data.data.data)
          dispatch({ type: "ALL_TROUBLES_RESET" });

        })
        .catch((err) => {
          dispatch({
            type: "ALL_TROUBLES_ERROR",
            status: err.response.status,
            payload: err.response.data.message,
          });
          dispatch({ type: "ALL_TROUBLES_RESET" });

        });
    });
  };
export const uploadImage =
  (uri: ImageParamsProps, setImage: React.Dispatch<React.SetStateAction<string | null>>) => async (dispatch: AuthDispatch) => {
    dispatch({ type: "UPLOAD_IMAGE_START" });
    getStorage("accessToken").then(async (token) => {

      await api(token)
        .post("/Auth/image/upload", uri)
        .then(async (data) => {
          setImage(data.data.data)
          dispatch({
            type: "UPLOAD_IMAGE_SUCCESS",
            status: data.status,
            payload: data.data.user,
          });
          dispatch({ type: "UPLOAD_IMAGE_RESET" });

        })
        .catch((err) => {
          console.log(err.response)
          dispatch({
            type: "UPLOAD_IMAGE_ERROR",
            status: err.response.status,
            payload: err.response.data.message,
          });
          dispatch({ type: "UPLOAD_IMAGE_RESET" });

        });
    });
  };
export const deleteImage =
  (key: string) => async (dispatch: AuthDispatch) => {
    dispatch({ type: "DELETE_IMAGE_START" });
    getStorage("accessToken").then(async (token) => {

      await api(token)
        .delete("/Auth/image/delete", { data: { key } })
        .then(async (data) => {
          dispatch({
            type: "DELETE_IMAGE_SUCCESS",
            status: data.status,
            payload: data.data.user,
          });
          dispatch({ type: "DELETE_IMAGE_RESET" });

        })
        .catch((err) => {
          console.log(err.response)
          dispatch({
            type: "DELETE_IMAGE_ERROR",
            status: err.response.status,
            payload: err.response.data.message,
          });
          dispatch({ type: "DELETE_IMAGE_RESET" });

        });
    });
  };

export const updateImage =
  (oldImage: string, newImage: ImageParamsProps, setImage: React.Dispatch<React.SetStateAction<string | null>>) => async (dispatch: AuthDispatch) => {
    dispatch({ type: "UPDATE_IMAGE_START" });
    getStorage("accessToken").then(async (token) => {

      await api(token)
        .put("/Auth/image/update", { oldImage, newImage })
        .then(async (data) => {
          setImage(data.data.data)
          dispatch({
            type: "UPDATE_IMAGE_SUCCESS",
            status: data.status,
            payload: data.data.user,
          });
          dispatch({ type: "UPDATE_IMAGE_RESET" });

        })
        .catch((err) => {
          console.log(err.response)
          dispatch({
            type: "UPDATE_IMAGE_ERROR",
            status: err.response.status,
            payload: err.response.data.message,
          });
          dispatch({ type: "UPDATE_IMAGE_RESET" });

        });
    });
  };
