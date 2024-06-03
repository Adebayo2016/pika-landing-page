import { HTMLProps } from "react";
import { WAITLIST_ENDPOINT_URL } from "./constants";

export function cls(
  ...classNames: (
    | HTMLProps<HTMLElement>["className"]
    | string
    | null
    | undefined
    | false
  )[]
) {
  const validClasses = classNames.filter(className => !!className) as string[];
  return validClasses.join(" ");
}

export const addToWaitlist = async (state: any, formData: FormData) => {
  try {
    const { name, email, state, city, business_name } =
      Object.fromEntries(formData);
    const res = await fetch(
      `${WAITLIST_ENDPOINT_URL}?name=${name}&email=${email}&state=${state}&city=${city}&business=${business_name}`,
      {
        method: "POST",
        body: JSON.stringify({})
      }
    );
    const data = await res.json();
    formData.set("email", "");
    return data;
  } catch (err) {
    return { success: false, err };
  }
};
