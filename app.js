let input;
let balance = 1000000;
do {
  input = parseInt(
    prompt(
      "انتخاب خود را وارد کنید : \n 1.موجودی حساب \n 2.برداشت وجه \n 3.انتقال وجه \n 4.خروج"
    )
  );

  switch (input) {
    case 1:
      console.log(`موجودی شما = ${balance}`);
      break;
    case 2:
      let cashWithdrawal = parseInt(prompt("مبلغ مورد نظر را وارد کنید"));
      if (cashWithdrawal > balance) {
        console.log("مبلغ برداشتی بیشتر از موجودی است");
      } else {
        balance = balance - cashWithdrawal;
        console.log(`شما ${cashWithdrawal} تومن از حساب خود برداشتید`);
        console.log(`موجودی شما = ${balance}`);
      }
      break;
    case 3:
      let cardNumber = prompt("شماره کارت مقصد را وارد کنید");
      let cashWithdrawal2 = parseInt(prompt("مبلغ مورد نظر را وارد کنید"));
      if (cashWithdrawal2 > balance) {
        console.log("مبلغ برداشتی بیشتر از موجودی است");
      } else {
        balance = balance - cashWithdrawal2;

        console.log(
          `شما ${cashWithdrawal2} تومن به شماره حساب ${cardNumber} واریز کردید `
        );
        console.log(`موجودی شما = ${balance}`);
      }
      break;
    case 4:
      console.log("امیدوارد که کاربردی بوده باشه : ))))");
      break;
    default:
      console.log("Error");
      break;
  }
} while (input !== 4);
