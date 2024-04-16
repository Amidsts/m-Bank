import sendSms from ".";

export async function sendNewAcctNoSms(
  receiverNo: string,
  name: string,
  acctNo: string
) {
  const mesaage = `Dear ${name}, Your account Number is ${acctNo}. Thank you for choosing m!Bank`;
  await sendSms(receiverNo, mesaage);
}
