use anchor_lang::prelude::*;

declare_id!("AfjyRuZ4kn9Gjja8PVSjxA7TBa8oBRkxUnzJwkiXbEL6");

#[program]
pub mod my_depin {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
