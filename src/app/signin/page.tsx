"use client";

import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./page.module.scss";

const SigninPage = () => {
  const methods = useForm();
  const onSubmit = () => {
    console.log(123);
  };
  return (
    <div className={styles.container}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}></form>
      </FormProvider>
      <h2>간편 로그인</h2>
      <div></div>
      <Link href="/signup">회원 가입 하러가기</Link>
    </div>
  );
};

export default SigninPage;
