import { Button } from "@/core/widgets/button";

import type React from "react";
import { useEffect, useState } from "react";
import type { AccountType } from "@/feature/account/domain/entities";
import { isEmpty, not } from "@fxts/core";
import { useAccount } from "@/feature/account/components/hooks";

const Main: React.FC<unknown> = () => {
  const [account, setAccount] = useState<AccountType>({
    email: "",
    password: "",
  });
  const accountPromise = useAccount();

  useEffect(() => {
    accountPromise.then((account) => {
      setAccount(account);
    });
  }, [accountPromise]);

  return (
    <>
      {not(isEmpty(account.email)) ? (
        <div className="rounded-lg border border-border p-6">
          <h1 className="text-2xl font-bold">IO Wiki</h1>
          <p className="mt-2 text-muted-foreground">
            안녕하세요, {account.email}님! 지식 관리 시스템에 오신 것을
            환영합니다. 왼쪽 사이드바에서 문서를 탐색하거나 새 문서를 생성할 수
            있습니다.
          </p>
          <div className="mt-4">
            <Button
              className="mypage"
              variant="outline"
              onClick={() => document.location.replace("/mypage")}
            >
              프로필 관리
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-6 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              IO Wiki에 오신 것을 환영합니다
            </h1>
            <p className="mt-2 text-muted-foreground">
              지식 관리 시스템을 사용하려면 로그인하거나 계정을 만드세요.
            </p>
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              className="login"
              onClick={() => document.location.replace("/login")}
            >
              로그인
            </Button>
            <Button
              onClick={() => document.location.replace("/register")}
              className="register"
              variant="outline"
            >
              회원가입
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
