import { PhoneNumberFormat, PhoneNumberUtil } from "google-libphonenumber";

export function formatPhone(phone) {
  const instance = PhoneNumberUtil.getInstance();
  const formattedNumber = instance.parse(phone, "GB");
  return instance.format(formattedNumber, PhoneNumberFormat.INTERNATIONAL);
}
