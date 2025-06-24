import { AdminAccountRepository } from "@/feature/account/data/repository";
import { Account, type AccountType } from "@/feature/account/domain/entities";
import { flatMap, map, pipe, take, toArray } from "@fxts/core";

class AdminAccountUsecase {
  async initializeAdminAccount(email: string): Promise<void> {
    await AdminAccountRepository.initializeAdminAccount(email);
  }

  async approveMember(email: string): Promise<void> {
    await AdminAccountRepository.approveMember(email);
  }

  async rejectMember(email: string): Promise<void> {
    await AdminAccountRepository.rejectMember(email);
  }
}

const adminAccountUsecase = new AdminAccountUsecase();

export { adminAccountUsecase as AdminAccountUsecase };
