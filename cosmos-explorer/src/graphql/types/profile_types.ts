export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ActionCoin: any;
  ActionDelegation: any;
  ActionPagination: any;
  ActionRedelegation: any;
  ActionUnbondingDelegation: any;
  _coin: any;
  _dec_coin: any;
  _text: any;
  bigint: any;
  jsonb: any;
  numeric: any;
  smallint: any;
  timestamp: any;
};


export type ActionAddress = {
  __typename?: 'ActionAddress';
  address: Scalars['String'];
};

export type ActionBalance = {
  __typename?: 'ActionBalance';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
};



export type ActionDelegationResponse = {
  __typename?: 'ActionDelegationResponse';
  delegations?: Maybe<Array<Maybe<Scalars['ActionDelegation']>>>;
  pagination?: Maybe<Scalars['ActionPagination']>;
};

export type ActionDelegationReward = {
  __typename?: 'ActionDelegationReward';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
  validator_address: Scalars['String'];
};



export type ActionRedelegationResponse = {
  __typename?: 'ActionRedelegationResponse';
  pagination?: Maybe<Scalars['ActionPagination']>;
  redelegations?: Maybe<Array<Maybe<Scalars['ActionRedelegation']>>>;
};


export type ActionUnbondingDelegationResponse = {
  __typename?: 'ActionUnbondingDelegationResponse';
  pagination?: Maybe<Scalars['ActionPagination']>;
  unbonding_delegations?: Maybe<Array<Maybe<Scalars['ActionUnbondingDelegation']>>>;
};

export type ActionValidatorCommissionAmount = {
  __typename?: 'ActionValidatorCommissionAmount';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};


/** Boolean expression to compare columns of type "_coin". All fields are combined with logical 'AND'. */
export type _Coin_Comparison_Exp = {
  _eq?: Maybe<Scalars['_coin']>;
  _gt?: Maybe<Scalars['_coin']>;
  _gte?: Maybe<Scalars['_coin']>;
  _in?: Maybe<Array<Scalars['_coin']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_coin']>;
  _lte?: Maybe<Scalars['_coin']>;
  _neq?: Maybe<Scalars['_coin']>;
  _nin?: Maybe<Array<Scalars['_coin']>>;
};


/** Boolean expression to compare columns of type "_dec_coin". All fields are combined with logical 'AND'. */
export type _Dec_Coin_Comparison_Exp = {
  _eq?: Maybe<Scalars['_dec_coin']>;
  _gt?: Maybe<Scalars['_dec_coin']>;
  _gte?: Maybe<Scalars['_dec_coin']>;
  _in?: Maybe<Array<Scalars['_dec_coin']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_dec_coin']>;
  _lte?: Maybe<Scalars['_dec_coin']>;
  _neq?: Maybe<Scalars['_dec_coin']>;
  _nin?: Maybe<Array<Scalars['_dec_coin']>>;
};


/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['_text']>;
  _gt?: Maybe<Scalars['_text']>;
  _gte?: Maybe<Scalars['_text']>;
  _in?: Maybe<Array<Scalars['_text']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_text']>;
  _lte?: Maybe<Scalars['_text']>;
  _neq?: Maybe<Scalars['_text']>;
  _nin?: Maybe<Array<Scalars['_text']>>;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  address: Scalars['String'];
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate;
  /** An array relationship */
  proposals: Array<Proposal>;
  /** An aggregate relationship */
  proposals_aggregate: Proposal_Aggregate;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Info_Aggregate;
  /** An object relationship */
  vesting_account?: Maybe<Vesting_Account>;
  /** An array relationship */
  vesting_accounts: Array<Vesting_Account>;
  /** An aggregate relationship */
  vesting_accounts_aggregate: Vesting_Account_Aggregate;
};


/** columns and relationships of "account" */
export type AccountProposal_DepositsArgs = {
  distinct_on?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Deposit_Order_By>>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_Deposits_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Deposit_Order_By>>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_VotesArgs = {
  distinct_on?: Maybe<Array<Proposal_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Vote_Order_By>>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Vote_Order_By>>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposalsArgs = {
  distinct_on?: Maybe<Array<Proposal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Order_By>>;
  where?: Maybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposals_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Order_By>>;
  where?: Maybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountValidator_InfosArgs = {
  distinct_on?: Maybe<Array<Validator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Info_Order_By>>;
  where?: Maybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountValidator_Infos_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Info_Order_By>>;
  where?: Maybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountVesting_AccountsArgs = {
  distinct_on?: Maybe<Array<Vesting_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Account_Order_By>>;
  where?: Maybe<Vesting_Account_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountVesting_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Vesting_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Account_Order_By>>;
  where?: Maybe<Vesting_Account_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
};


/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: Maybe<Array<Account_Bool_Exp>>;
  _not?: Maybe<Account_Bool_Exp>;
  _or?: Maybe<Array<Account_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  proposal_deposits?: Maybe<Proposal_Deposit_Bool_Exp>;
  proposal_deposits_aggregate?: Maybe<Proposal_Deposit_Aggregate_Bool_Exp>;
  proposal_votes?: Maybe<Proposal_Vote_Bool_Exp>;
  proposal_votes_aggregate?: Maybe<Proposal_Vote_Aggregate_Bool_Exp>;
  proposals?: Maybe<Proposal_Bool_Exp>;
  proposals_aggregate?: Maybe<Proposal_Aggregate_Bool_Exp>;
  validator_infos?: Maybe<Validator_Info_Bool_Exp>;
  validator_infos_aggregate?: Maybe<Validator_Info_Aggregate_Bool_Exp>;
  vesting_account?: Maybe<Vesting_Account_Bool_Exp>;
  vesting_accounts?: Maybe<Vesting_Account_Bool_Exp>;
  vesting_accounts_aggregate?: Maybe<Vesting_Account_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
  /** unique or primary key constraint on columns "address" */
  AccountPkey = 'account_pkey'
}

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  proposal_deposits?: Maybe<Proposal_Deposit_Arr_Rel_Insert_Input>;
  proposal_votes?: Maybe<Proposal_Vote_Arr_Rel_Insert_Input>;
  proposals?: Maybe<Proposal_Arr_Rel_Insert_Input>;
  validator_infos?: Maybe<Validator_Info_Arr_Rel_Insert_Input>;
  vesting_account?: Maybe<Vesting_Account_Obj_Rel_Insert_Input>;
  vesting_accounts?: Maybe<Vesting_Account_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  address?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
  __typename?: 'account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type Account_Obj_Rel_Insert_Input = {
  data: Account_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Account_On_Conflict>;
};

/** on_conflict condition type for table "account" */
export type Account_On_Conflict = {
  constraint: Account_Constraint;
  update_columns?: Array<Account_Update_Column>;
  where?: Maybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  address?: Maybe<Order_By>;
  proposal_deposits_aggregate?: Maybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: Maybe<Proposal_Vote_Aggregate_Order_By>;
  proposals_aggregate?: Maybe<Proposal_Aggregate_Order_By>;
  validator_infos_aggregate?: Maybe<Validator_Info_Aggregate_Order_By>;
  vesting_account?: Maybe<Vesting_Account_Order_By>;
  vesting_accounts_aggregate?: Maybe<Vesting_Account_Aggregate_Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  address: Scalars['String'];
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  Address = 'address'
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  address?: Maybe<Scalars['String']>;
};

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  address?: Maybe<Scalars['String']>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
  /** column name */
  Address = 'address'
}

export type Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};

/** columns and relationships of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis = {
  __typename?: 'average_block_time_from_genesis';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate = {
  __typename?: 'average_block_time_from_genesis_aggregate';
  aggregate?: Maybe<Average_Block_Time_From_Genesis_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_From_Genesis>;
};

/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_Fields = {
  __typename?: 'average_block_time_from_genesis_aggregate_fields';
  avg?: Maybe<Average_Block_Time_From_Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_From_Genesis_Max_Fields>;
  min?: Maybe<Average_Block_Time_From_Genesis_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_From_Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_From_Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_From_Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_From_Genesis_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_From_Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_From_Genesis_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_From_Genesis_Variance_Fields>;
};


/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_From_Genesis_Avg_Fields = {
  __typename?: 'average_block_time_from_genesis_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_from_genesis". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_From_Genesis_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimeFromGenesisPkey = 'average_block_time_from_genesis_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Inc_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Insert_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Average_Block_Time_From_Genesis_Max_Fields = {
  __typename?: 'average_block_time_from_genesis_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_From_Genesis_Min_Fields = {
  __typename?: 'average_block_time_from_genesis_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Mutation_Response = {
  __typename?: 'average_block_time_from_genesis_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_From_Genesis>;
};

/** on_conflict condition type for table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_On_Conflict = {
  constraint: Average_Block_Time_From_Genesis_Constraint;
  update_columns?: Array<Average_Block_Time_From_Genesis_Update_Column>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_from_genesis". */
export type Average_Block_Time_From_Genesis_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
};

/** primary key columns input for table: average_block_time_from_genesis */
export type Average_Block_Time_From_Genesis_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Set_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_From_Genesis_Stddev_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_From_Genesis_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_From_Genesis_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_From_Genesis_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_From_Genesis_Stream_Cursor_Value_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_From_Genesis_Sum_Fields = {
  __typename?: 'average_block_time_from_genesis_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_From_Genesis_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Average_Block_Time_From_Genesis_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Average_Block_Time_From_Genesis_Set_Input>;
  where: Average_Block_Time_From_Genesis_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_From_Genesis_Var_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_From_Genesis_Var_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_From_Genesis_Variance_Fields = {
  __typename?: 'average_block_time_from_genesis_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day = {
  __typename?: 'average_block_time_per_day';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate = {
  __typename?: 'average_block_time_per_day_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Day_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Day>;
};

/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_Fields = {
  __typename?: 'average_block_time_per_day_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Day_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Day_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Day_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Day_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Day_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Day_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Day_Avg_Fields = {
  __typename?: 'average_block_time_per_day_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_day". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerDayPkey = 'average_block_time_per_day_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Inc_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Insert_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Day_Max_Fields = {
  __typename?: 'average_block_time_per_day_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Day_Min_Fields = {
  __typename?: 'average_block_time_per_day_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Mutation_Response = {
  __typename?: 'average_block_time_per_day_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Day>;
};

/** on_conflict condition type for table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_On_Conflict = {
  constraint: Average_Block_Time_Per_Day_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Day_Update_Column>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_day". */
export type Average_Block_Time_Per_Day_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_day */
export type Average_Block_Time_Per_Day_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Set_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Day_Stddev_Fields = {
  __typename?: 'average_block_time_per_day_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Day_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_day_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Day_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_day_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Day_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Day_Stream_Cursor_Value_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Day_Sum_Fields = {
  __typename?: 'average_block_time_per_day_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Day_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Average_Block_Time_Per_Day_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Average_Block_Time_Per_Day_Set_Input>;
  where: Average_Block_Time_Per_Day_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Day_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_day_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Day_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_day_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Day_Variance_Fields = {
  __typename?: 'average_block_time_per_day_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour = {
  __typename?: 'average_block_time_per_hour';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate = {
  __typename?: 'average_block_time_per_hour_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Hour_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Hour>;
};

/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_Fields = {
  __typename?: 'average_block_time_per_hour_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Hour_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Hour_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Hour_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Hour_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Hour_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Hour_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Hour_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Hour_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Hour_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Hour_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Hour_Avg_Fields = {
  __typename?: 'average_block_time_per_hour_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerHourPkey = 'average_block_time_per_hour_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Inc_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Insert_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Hour_Max_Fields = {
  __typename?: 'average_block_time_per_hour_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Hour_Min_Fields = {
  __typename?: 'average_block_time_per_hour_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Mutation_Response = {
  __typename?: 'average_block_time_per_hour_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Hour>;
};

/** on_conflict condition type for table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_On_Conflict = {
  constraint: Average_Block_Time_Per_Hour_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Hour_Update_Column>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_hour". */
export type Average_Block_Time_Per_Hour_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_hour */
export type Average_Block_Time_Per_Hour_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Set_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Hour_Stddev_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Hour_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Hour_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Hour_Sum_Fields = {
  __typename?: 'average_block_time_per_hour_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Hour_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Average_Block_Time_Per_Hour_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Average_Block_Time_Per_Hour_Set_Input>;
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Hour_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Hour_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Hour_Variance_Fields = {
  __typename?: 'average_block_time_per_hour_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute = {
  __typename?: 'average_block_time_per_minute';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate = {
  __typename?: 'average_block_time_per_minute_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Minute_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Minute>;
};

/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_Fields = {
  __typename?: 'average_block_time_per_minute_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Minute_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Minute_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Minute_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Minute_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Minute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Minute_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Minute_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Minute_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Minute_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Minute_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Minute_Avg_Fields = {
  __typename?: 'average_block_time_per_minute_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_minute". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  AverageBlockTimePerMinutePkey = 'average_block_time_per_minute_pkey'
}

/** input type for incrementing numeric columns in table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Inc_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Insert_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Minute_Max_Fields = {
  __typename?: 'average_block_time_per_minute_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Minute_Min_Fields = {
  __typename?: 'average_block_time_per_minute_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Mutation_Response = {
  __typename?: 'average_block_time_per_minute_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Average_Block_Time_Per_Minute>;
};

/** on_conflict condition type for table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_On_Conflict = {
  constraint: Average_Block_Time_Per_Minute_Constraint;
  update_columns?: Array<Average_Block_Time_Per_Minute_Update_Column>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_minute". */
export type Average_Block_Time_Per_Minute_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
};

/** primary key columns input for table: average_block_time_per_minute */
export type Average_Block_Time_Per_Minute_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Set_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Minute_Stddev_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Minute_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Minute_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input = {
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Minute_Sum_Fields = {
  __typename?: 'average_block_time_per_minute_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Update_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Average_Block_Time_Per_Minute_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Average_Block_Time_Per_Minute_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Average_Block_Time_Per_Minute_Set_Input>;
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Minute_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Minute_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Minute_Variance_Fields = {
  __typename?: 'average_block_time_per_minute_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "block" */
export type Block = {
  __typename?: 'block';
  hash: Scalars['String'];
  height: Scalars['bigint'];
  num_txs?: Maybe<Scalars['Int']>;
  /** An array relationship */
  pre_commits: Array<Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp: Scalars['timestamp'];
  total_gas?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  /** An object relationship */
  validator?: Maybe<Validator>;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "block" */
export type BlockPre_CommitsArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockPre_Commits_AggregateArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_DepositsArgs = {
  distinct_on?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Deposit_Order_By>>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_Deposits_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Deposit_Order_By>>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_VotesArgs = {
  distinct_on?: Maybe<Array<Proposal_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Vote_Order_By>>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Vote_Order_By>>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactionsArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_PowersArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};

/** aggregated selection of "block" */
export type Block_Aggregate = {
  __typename?: 'block_aggregate';
  aggregate?: Maybe<Block_Aggregate_Fields>;
  nodes: Array<Block>;
};

export type Block_Aggregate_Bool_Exp = {
  count?: Maybe<Block_Aggregate_Bool_Exp_Count>;
};

export type Block_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Block_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Block_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "block" */
export type Block_Aggregate_Fields = {
  __typename?: 'block_aggregate_fields';
  avg?: Maybe<Block_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Block_Max_Fields>;
  min?: Maybe<Block_Min_Fields>;
  stddev?: Maybe<Block_Stddev_Fields>;
  stddev_pop?: Maybe<Block_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Block_Stddev_Samp_Fields>;
  sum?: Maybe<Block_Sum_Fields>;
  var_pop?: Maybe<Block_Var_Pop_Fields>;
  var_samp?: Maybe<Block_Var_Samp_Fields>;
  variance?: Maybe<Block_Variance_Fields>;
};


/** aggregate fields of "block" */
export type Block_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Block_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "block" */
export type Block_Aggregate_Order_By = {
  avg?: Maybe<Block_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Block_Max_Order_By>;
  min?: Maybe<Block_Min_Order_By>;
  stddev?: Maybe<Block_Stddev_Order_By>;
  stddev_pop?: Maybe<Block_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Block_Stddev_Samp_Order_By>;
  sum?: Maybe<Block_Sum_Order_By>;
  var_pop?: Maybe<Block_Var_Pop_Order_By>;
  var_samp?: Maybe<Block_Var_Samp_Order_By>;
  variance?: Maybe<Block_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "block" */
export type Block_Arr_Rel_Insert_Input = {
  data: Array<Block_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Block_On_Conflict>;
};

/** aggregate avg on columns */
export type Block_Avg_Fields = {
  __typename?: 'block_avg_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "block" */
export type Block_Avg_Order_By = {
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: Maybe<Array<Block_Bool_Exp>>;
  _not?: Maybe<Block_Bool_Exp>;
  _or?: Maybe<Array<Block_Bool_Exp>>;
  hash?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  num_txs?: Maybe<Int_Comparison_Exp>;
  pre_commits?: Maybe<Pre_Commit_Bool_Exp>;
  pre_commits_aggregate?: Maybe<Pre_Commit_Aggregate_Bool_Exp>;
  proposal_deposits?: Maybe<Proposal_Deposit_Bool_Exp>;
  proposal_deposits_aggregate?: Maybe<Proposal_Deposit_Aggregate_Bool_Exp>;
  proposal_votes?: Maybe<Proposal_Vote_Bool_Exp>;
  proposal_votes_aggregate?: Maybe<Proposal_Vote_Aggregate_Bool_Exp>;
  proposer_address?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  total_gas?: Maybe<Bigint_Comparison_Exp>;
  transactions?: Maybe<Transaction_Bool_Exp>;
  transactions_aggregate?: Maybe<Transaction_Aggregate_Bool_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_voting_powers?: Maybe<Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: Maybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "block" */
export enum Block_Constraint {
  /** unique or primary key constraint on columns "hash" */
  BlockHashKey = 'block_hash_key',
  /** unique or primary key constraint on columns "height" */
  BlockPkey = 'block_pkey'
}

/** input type for incrementing numeric columns in table "block" */
export type Block_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "block" */
export type Block_Insert_Input = {
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  pre_commits?: Maybe<Pre_Commit_Arr_Rel_Insert_Input>;
  proposal_deposits?: Maybe<Proposal_Deposit_Arr_Rel_Insert_Input>;
  proposal_votes?: Maybe<Proposal_Vote_Arr_Rel_Insert_Input>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  total_gas?: Maybe<Scalars['bigint']>;
  transactions?: Maybe<Transaction_Arr_Rel_Insert_Input>;
  validator?: Maybe<Validator_Obj_Rel_Insert_Input>;
  validator_voting_powers?: Maybe<Validator_Voting_Power_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Block_Max_Fields = {
  __typename?: 'block_max_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "block" */
export type Block_Max_Order_By = {
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Block_Min_Fields = {
  __typename?: 'block_min_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "block" */
export type Block_Min_Order_By = {
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
};

/** response of any mutation on the table "block" */
export type Block_Mutation_Response = {
  __typename?: 'block_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Block>;
};

/** input type for inserting object relation for remote table "block" */
export type Block_Obj_Rel_Insert_Input = {
  data: Block_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Block_On_Conflict>;
};

/** on_conflict condition type for table "block" */
export type Block_On_Conflict = {
  constraint: Block_Constraint;
  update_columns?: Array<Block_Update_Column>;
  where?: Maybe<Block_Bool_Exp>;
};

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  pre_commits_aggregate?: Maybe<Pre_Commit_Aggregate_Order_By>;
  proposal_deposits_aggregate?: Maybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: Maybe<Proposal_Vote_Aggregate_Order_By>;
  proposer_address?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
  transactions_aggregate?: Maybe<Transaction_Aggregate_Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_voting_powers_aggregate?: Maybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** primary key columns input for table: block */
export type Block_Pk_Columns_Input = {
  height: Scalars['bigint'];
};

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

/** input type for updating data in table "block" */
export type Block_Set_Input = {
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Block_Stddev_Fields = {
  __typename?: 'block_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "block" */
export type Block_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Block_Stddev_Pop_Fields = {
  __typename?: 'block_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "block" */
export type Block_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Block_Stddev_Samp_Fields = {
  __typename?: 'block_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "block" */
export type Block_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
};

/** Streaming cursor of the table "block" */
export type Block_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Block_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Block_Stream_Cursor_Value_Input = {
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Block_Sum_Fields = {
  __typename?: 'block_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "block" */
export type Block_Sum_Order_By = {
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
};

/** update columns of table "block" */
export enum Block_Update_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

export type Block_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Block_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Block_Set_Input>;
  where: Block_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Block_Var_Pop_Fields = {
  __typename?: 'block_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "block" */
export type Block_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Block_Var_Samp_Fields = {
  __typename?: 'block_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "block" */
export type Block_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Block_Variance_Fields = {
  __typename?: 'block_variance_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "block" */
export type Block_Variance_Order_By = {
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
};

/** columns and relationships of "community_pool" */
export type Community_Pool = {
  __typename?: 'community_pool';
  coins: Scalars['_dec_coin'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "community_pool" */
export type Community_Pool_Aggregate = {
  __typename?: 'community_pool_aggregate';
  aggregate?: Maybe<Community_Pool_Aggregate_Fields>;
  nodes: Array<Community_Pool>;
};

/** aggregate fields of "community_pool" */
export type Community_Pool_Aggregate_Fields = {
  __typename?: 'community_pool_aggregate_fields';
  avg?: Maybe<Community_Pool_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Community_Pool_Max_Fields>;
  min?: Maybe<Community_Pool_Min_Fields>;
  stddev?: Maybe<Community_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Community_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Community_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Community_Pool_Sum_Fields>;
  var_pop?: Maybe<Community_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Community_Pool_Var_Samp_Fields>;
  variance?: Maybe<Community_Pool_Variance_Fields>;
};


/** aggregate fields of "community_pool" */
export type Community_Pool_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Community_Pool_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Community_Pool_Avg_Fields = {
  __typename?: 'community_pool_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "community_pool". All fields are combined with a logical 'AND'. */
export type Community_Pool_Bool_Exp = {
  _and?: Maybe<Array<Community_Pool_Bool_Exp>>;
  _not?: Maybe<Community_Pool_Bool_Exp>;
  _or?: Maybe<Array<Community_Pool_Bool_Exp>>;
  coins?: Maybe<_Dec_Coin_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "community_pool" */
export enum Community_Pool_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  CommunityPoolPkey = 'community_pool_pkey'
}

/** input type for incrementing numeric columns in table "community_pool" */
export type Community_Pool_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "community_pool" */
export type Community_Pool_Insert_Input = {
  coins?: Maybe<Scalars['_dec_coin']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Community_Pool_Max_Fields = {
  __typename?: 'community_pool_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Community_Pool_Min_Fields = {
  __typename?: 'community_pool_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "community_pool" */
export type Community_Pool_Mutation_Response = {
  __typename?: 'community_pool_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Community_Pool>;
};

/** on_conflict condition type for table "community_pool" */
export type Community_Pool_On_Conflict = {
  constraint: Community_Pool_Constraint;
  update_columns?: Array<Community_Pool_Update_Column>;
  where?: Maybe<Community_Pool_Bool_Exp>;
};

/** Ordering options when selecting data from "community_pool". */
export type Community_Pool_Order_By = {
  coins?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
};

/** primary key columns input for table: community_pool */
export type Community_Pool_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "community_pool" */
export enum Community_Pool_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "community_pool" */
export type Community_Pool_Set_Input = {
  coins?: Maybe<Scalars['_dec_coin']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Community_Pool_Stddev_Fields = {
  __typename?: 'community_pool_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Community_Pool_Stddev_Pop_Fields = {
  __typename?: 'community_pool_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Community_Pool_Stddev_Samp_Fields = {
  __typename?: 'community_pool_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "community_pool" */
export type Community_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Community_Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Community_Pool_Stream_Cursor_Value_Input = {
  coins?: Maybe<Scalars['_dec_coin']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Community_Pool_Sum_Fields = {
  __typename?: 'community_pool_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "community_pool" */
export enum Community_Pool_Update_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Community_Pool_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Community_Pool_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Community_Pool_Set_Input>;
  where: Community_Pool_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Community_Pool_Var_Pop_Fields = {
  __typename?: 'community_pool_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Community_Pool_Var_Samp_Fields = {
  __typename?: 'community_pool_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Community_Pool_Variance_Fields = {
  __typename?: 'community_pool_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "distribution_params" */
export type Distribution_Params = {
  __typename?: 'distribution_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "distribution_params" */
export type Distribution_ParamsParamsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "distribution_params" */
export type Distribution_Params_Aggregate = {
  __typename?: 'distribution_params_aggregate';
  aggregate?: Maybe<Distribution_Params_Aggregate_Fields>;
  nodes: Array<Distribution_Params>;
};

/** aggregate fields of "distribution_params" */
export type Distribution_Params_Aggregate_Fields = {
  __typename?: 'distribution_params_aggregate_fields';
  avg?: Maybe<Distribution_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Distribution_Params_Max_Fields>;
  min?: Maybe<Distribution_Params_Min_Fields>;
  stddev?: Maybe<Distribution_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Distribution_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Distribution_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Distribution_Params_Sum_Fields>;
  var_pop?: Maybe<Distribution_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Distribution_Params_Var_Samp_Fields>;
  variance?: Maybe<Distribution_Params_Variance_Fields>;
};


/** aggregate fields of "distribution_params" */
export type Distribution_Params_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Distribution_Params_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Distribution_Params_Append_Input = {
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Distribution_Params_Avg_Fields = {
  __typename?: 'distribution_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "distribution_params". All fields are combined with a logical 'AND'. */
export type Distribution_Params_Bool_Exp = {
  _and?: Maybe<Array<Distribution_Params_Bool_Exp>>;
  _not?: Maybe<Distribution_Params_Bool_Exp>;
  _or?: Maybe<Array<Distribution_Params_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
  params?: Maybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "distribution_params" */
export enum Distribution_Params_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  DistributionParamsPkey = 'distribution_params_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Distribution_Params_Delete_At_Path_Input = {
  params?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Distribution_Params_Delete_Elem_Input = {
  params?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Distribution_Params_Delete_Key_Input = {
  params?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "distribution_params" */
export type Distribution_Params_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "distribution_params" */
export type Distribution_Params_Insert_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Distribution_Params_Max_Fields = {
  __typename?: 'distribution_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Distribution_Params_Min_Fields = {
  __typename?: 'distribution_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "distribution_params" */
export type Distribution_Params_Mutation_Response = {
  __typename?: 'distribution_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Distribution_Params>;
};

/** on_conflict condition type for table "distribution_params" */
export type Distribution_Params_On_Conflict = {
  constraint: Distribution_Params_Constraint;
  update_columns?: Array<Distribution_Params_Update_Column>;
  where?: Maybe<Distribution_Params_Bool_Exp>;
};

/** Ordering options when selecting data from "distribution_params". */
export type Distribution_Params_Order_By = {
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
  params?: Maybe<Order_By>;
};

/** primary key columns input for table: distribution_params */
export type Distribution_Params_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Distribution_Params_Prepend_Input = {
  params?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "distribution_params" */
export enum Distribution_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "distribution_params" */
export type Distribution_Params_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Distribution_Params_Stddev_Fields = {
  __typename?: 'distribution_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Distribution_Params_Stddev_Pop_Fields = {
  __typename?: 'distribution_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Distribution_Params_Stddev_Samp_Fields = {
  __typename?: 'distribution_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "distribution_params" */
export type Distribution_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Distribution_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Distribution_Params_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Distribution_Params_Sum_Fields = {
  __typename?: 'distribution_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "distribution_params" */
export enum Distribution_Params_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

export type Distribution_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: Maybe<Distribution_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: Maybe<Distribution_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: Maybe<Distribution_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: Maybe<Distribution_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Distribution_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: Maybe<Distribution_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Distribution_Params_Set_Input>;
  where: Distribution_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Distribution_Params_Var_Pop_Fields = {
  __typename?: 'distribution_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Distribution_Params_Var_Samp_Fields = {
  __typename?: 'distribution_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Distribution_Params_Variance_Fields = {
  __typename?: 'distribution_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "double_sign_evidence" */
export type Double_Sign_Evidence = {
  __typename?: 'double_sign_evidence';
  /** An object relationship */
  doubleSignVoteByVoteAId: Double_Sign_Vote;
  /** An object relationship */
  double_sign_vote: Double_Sign_Vote;
  height: Scalars['bigint'];
  vote_a_id: Scalars['bigint'];
  vote_b_id: Scalars['bigint'];
};

/** aggregated selection of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate = {
  __typename?: 'double_sign_evidence_aggregate';
  aggregate?: Maybe<Double_Sign_Evidence_Aggregate_Fields>;
  nodes: Array<Double_Sign_Evidence>;
};

export type Double_Sign_Evidence_Aggregate_Bool_Exp = {
  count?: Maybe<Double_Sign_Evidence_Aggregate_Bool_Exp_Count>;
};

export type Double_Sign_Evidence_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Double_Sign_Evidence_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Fields = {
  __typename?: 'double_sign_evidence_aggregate_fields';
  avg?: Maybe<Double_Sign_Evidence_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Double_Sign_Evidence_Max_Fields>;
  min?: Maybe<Double_Sign_Evidence_Min_Fields>;
  stddev?: Maybe<Double_Sign_Evidence_Stddev_Fields>;
  stddev_pop?: Maybe<Double_Sign_Evidence_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Double_Sign_Evidence_Stddev_Samp_Fields>;
  sum?: Maybe<Double_Sign_Evidence_Sum_Fields>;
  var_pop?: Maybe<Double_Sign_Evidence_Var_Pop_Fields>;
  var_samp?: Maybe<Double_Sign_Evidence_Var_Samp_Fields>;
  variance?: Maybe<Double_Sign_Evidence_Variance_Fields>;
};


/** aggregate fields of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Order_By = {
  avg?: Maybe<Double_Sign_Evidence_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Double_Sign_Evidence_Max_Order_By>;
  min?: Maybe<Double_Sign_Evidence_Min_Order_By>;
  stddev?: Maybe<Double_Sign_Evidence_Stddev_Order_By>;
  stddev_pop?: Maybe<Double_Sign_Evidence_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Double_Sign_Evidence_Stddev_Samp_Order_By>;
  sum?: Maybe<Double_Sign_Evidence_Sum_Order_By>;
  var_pop?: Maybe<Double_Sign_Evidence_Var_Pop_Order_By>;
  var_samp?: Maybe<Double_Sign_Evidence_Var_Samp_Order_By>;
  variance?: Maybe<Double_Sign_Evidence_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "double_sign_evidence" */
export type Double_Sign_Evidence_Arr_Rel_Insert_Input = {
  data: Array<Double_Sign_Evidence_Insert_Input>;
};

/** aggregate avg on columns */
export type Double_Sign_Evidence_Avg_Fields = {
  __typename?: 'double_sign_evidence_avg_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Avg_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_evidence". All fields are combined with a logical 'AND'. */
export type Double_Sign_Evidence_Bool_Exp = {
  _and?: Maybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  _not?: Maybe<Double_Sign_Evidence_Bool_Exp>;
  _or?: Maybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  doubleSignVoteByVoteAId?: Maybe<Double_Sign_Vote_Bool_Exp>;
  double_sign_vote?: Maybe<Double_Sign_Vote_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  vote_a_id?: Maybe<Bigint_Comparison_Exp>;
  vote_b_id?: Maybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "double_sign_evidence" */
export type Double_Sign_Evidence_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "double_sign_evidence" */
export type Double_Sign_Evidence_Insert_Input = {
  doubleSignVoteByVoteAId?: Maybe<Double_Sign_Vote_Obj_Rel_Insert_Input>;
  double_sign_vote?: Maybe<Double_Sign_Vote_Obj_Rel_Insert_Input>;
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Double_Sign_Evidence_Max_Fields = {
  __typename?: 'double_sign_evidence_max_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Max_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Double_Sign_Evidence_Min_Fields = {
  __typename?: 'double_sign_evidence_min_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Min_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "double_sign_evidence" */
export type Double_Sign_Evidence_Mutation_Response = {
  __typename?: 'double_sign_evidence_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Double_Sign_Evidence>;
};

/** Ordering options when selecting data from "double_sign_evidence". */
export type Double_Sign_Evidence_Order_By = {
  doubleSignVoteByVoteAId?: Maybe<Double_Sign_Vote_Order_By>;
  double_sign_vote?: Maybe<Double_Sign_Vote_Order_By>;
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** select columns of table "double_sign_evidence" */
export enum Double_Sign_Evidence_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  VoteAId = 'vote_a_id',
  /** column name */
  VoteBId = 'vote_b_id'
}

/** input type for updating data in table "double_sign_evidence" */
export type Double_Sign_Evidence_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Double_Sign_Evidence_Stddev_Fields = {
  __typename?: 'double_sign_evidence_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Double_Sign_Evidence_Stddev_Pop_Fields = {
  __typename?: 'double_sign_evidence_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Double_Sign_Evidence_Stddev_Samp_Fields = {
  __typename?: 'double_sign_evidence_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** Streaming cursor of the table "double_sign_evidence" */
export type Double_Sign_Evidence_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Double_Sign_Evidence_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Double_Sign_Evidence_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Double_Sign_Evidence_Sum_Fields = {
  __typename?: 'double_sign_evidence_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Sum_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

export type Double_Sign_Evidence_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Double_Sign_Evidence_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Double_Sign_Evidence_Set_Input>;
  where: Double_Sign_Evidence_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Double_Sign_Evidence_Var_Pop_Fields = {
  __typename?: 'double_sign_evidence_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Double_Sign_Evidence_Var_Samp_Fields = {
  __typename?: 'double_sign_evidence_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Double_Sign_Evidence_Variance_Fields = {
  __typename?: 'double_sign_evidence_variance_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Variance_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_Vote = {
  __typename?: 'double_sign_vote';
  block_id: Scalars['String'];
  /** An array relationship */
  doubleSignEvidencesByVoteBId: Array<Double_Sign_Evidence>;
  /** An aggregate relationship */
  doubleSignEvidencesByVoteBId_aggregate: Double_Sign_Evidence_Aggregate;
  /** An array relationship */
  double_sign_evidences: Array<Double_Sign_Evidence>;
  /** An aggregate relationship */
  double_sign_evidences_aggregate: Double_Sign_Evidence_Aggregate;
  height: Scalars['bigint'];
  id: Scalars['Int'];
  round: Scalars['Int'];
  signature: Scalars['String'];
  type: Scalars['smallint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  validator_index: Scalars['Int'];
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBIdArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBId_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_EvidencesArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_Evidences_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};

/** aggregated selection of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate = {
  __typename?: 'double_sign_vote_aggregate';
  aggregate?: Maybe<Double_Sign_Vote_Aggregate_Fields>;
  nodes: Array<Double_Sign_Vote>;
};

export type Double_Sign_Vote_Aggregate_Bool_Exp = {
  count?: Maybe<Double_Sign_Vote_Aggregate_Bool_Exp_Count>;
};

export type Double_Sign_Vote_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Double_Sign_Vote_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Fields = {
  __typename?: 'double_sign_vote_aggregate_fields';
  avg?: Maybe<Double_Sign_Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Double_Sign_Vote_Max_Fields>;
  min?: Maybe<Double_Sign_Vote_Min_Fields>;
  stddev?: Maybe<Double_Sign_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Double_Sign_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Double_Sign_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Double_Sign_Vote_Sum_Fields>;
  var_pop?: Maybe<Double_Sign_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Double_Sign_Vote_Var_Samp_Fields>;
  variance?: Maybe<Double_Sign_Vote_Variance_Fields>;
};


/** aggregate fields of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Order_By = {
  avg?: Maybe<Double_Sign_Vote_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Double_Sign_Vote_Max_Order_By>;
  min?: Maybe<Double_Sign_Vote_Min_Order_By>;
  stddev?: Maybe<Double_Sign_Vote_Stddev_Order_By>;
  stddev_pop?: Maybe<Double_Sign_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Double_Sign_Vote_Stddev_Samp_Order_By>;
  sum?: Maybe<Double_Sign_Vote_Sum_Order_By>;
  var_pop?: Maybe<Double_Sign_Vote_Var_Pop_Order_By>;
  var_samp?: Maybe<Double_Sign_Vote_Var_Samp_Order_By>;
  variance?: Maybe<Double_Sign_Vote_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "double_sign_vote" */
export type Double_Sign_Vote_Arr_Rel_Insert_Input = {
  data: Array<Double_Sign_Vote_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Double_Sign_Vote_On_Conflict>;
};

/** aggregate avg on columns */
export type Double_Sign_Vote_Avg_Fields = {
  __typename?: 'double_sign_vote_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Avg_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_vote". All fields are combined with a logical 'AND'. */
export type Double_Sign_Vote_Bool_Exp = {
  _and?: Maybe<Array<Double_Sign_Vote_Bool_Exp>>;
  _not?: Maybe<Double_Sign_Vote_Bool_Exp>;
  _or?: Maybe<Array<Double_Sign_Vote_Bool_Exp>>;
  block_id?: Maybe<String_Comparison_Exp>;
  doubleSignEvidencesByVoteBId?: Maybe<Double_Sign_Evidence_Bool_Exp>;
  doubleSignEvidencesByVoteBId_aggregate?: Maybe<Double_Sign_Evidence_Aggregate_Bool_Exp>;
  double_sign_evidences?: Maybe<Double_Sign_Evidence_Bool_Exp>;
  double_sign_evidences_aggregate?: Maybe<Double_Sign_Evidence_Aggregate_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  round?: Maybe<Int_Comparison_Exp>;
  signature?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Smallint_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
  validator_index?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "double_sign_vote" */
export enum Double_Sign_Vote_Constraint {
  /** unique or primary key constraint on columns "validator_address", "block_id" */
  DoubleSignVoteBlockIdValidatorAddressKey = 'double_sign_vote_block_id_validator_address_key',
  /** unique or primary key constraint on columns "id" */
  DoubleSignVotePkey = 'double_sign_vote_pkey'
}

/** input type for incrementing numeric columns in table "double_sign_vote" */
export type Double_Sign_Vote_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['smallint']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "double_sign_vote" */
export type Double_Sign_Vote_Insert_Input = {
  block_id?: Maybe<Scalars['String']>;
  doubleSignEvidencesByVoteBId?: Maybe<Double_Sign_Evidence_Arr_Rel_Insert_Input>;
  double_sign_evidences?: Maybe<Double_Sign_Evidence_Arr_Rel_Insert_Input>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['smallint']>;
  validator?: Maybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Double_Sign_Vote_Max_Fields = {
  __typename?: 'double_sign_vote_max_fields';
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Max_Order_By = {
  block_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Double_Sign_Vote_Min_Fields = {
  __typename?: 'double_sign_vote_min_fields';
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Min_Order_By = {
  block_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** response of any mutation on the table "double_sign_vote" */
export type Double_Sign_Vote_Mutation_Response = {
  __typename?: 'double_sign_vote_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Double_Sign_Vote>;
};

/** input type for inserting object relation for remote table "double_sign_vote" */
export type Double_Sign_Vote_Obj_Rel_Insert_Input = {
  data: Double_Sign_Vote_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Double_Sign_Vote_On_Conflict>;
};

/** on_conflict condition type for table "double_sign_vote" */
export type Double_Sign_Vote_On_Conflict = {
  constraint: Double_Sign_Vote_Constraint;
  update_columns?: Array<Double_Sign_Vote_Update_Column>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};

/** Ordering options when selecting data from "double_sign_vote". */
export type Double_Sign_Vote_Order_By = {
  block_id?: Maybe<Order_By>;
  doubleSignEvidencesByVoteBId_aggregate?: Maybe<Double_Sign_Evidence_Aggregate_Order_By>;
  double_sign_evidences_aggregate?: Maybe<Double_Sign_Evidence_Aggregate_Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** primary key columns input for table: double_sign_vote */
export type Double_Sign_Vote_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "double_sign_vote" */
export enum Double_Sign_Vote_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Round = 'round',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  ValidatorIndex = 'validator_index'
}

/** input type for updating data in table "double_sign_vote" */
export type Double_Sign_Vote_Set_Input = {
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Double_Sign_Vote_Stddev_Fields = {
  __typename?: 'double_sign_vote_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Double_Sign_Vote_Stddev_Pop_Fields = {
  __typename?: 'double_sign_vote_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Double_Sign_Vote_Stddev_Samp_Fields = {
  __typename?: 'double_sign_vote_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** Streaming cursor of the table "double_sign_vote" */
export type Double_Sign_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Double_Sign_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Double_Sign_Vote_Stream_Cursor_Value_Input = {
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Double_Sign_Vote_Sum_Fields = {
  __typename?: 'double_sign_vote_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['smallint']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Sum_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** update columns of table "double_sign_vote" */
export enum Double_Sign_Vote_Update_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Round = 'round',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  ValidatorIndex = 'validator_index'
}

export type Double_Sign_Vote_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Double_Sign_Vote_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Double_Sign_Vote_Set_Input>;
  where: Double_Sign_Vote_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Double_Sign_Vote_Var_Pop_Fields = {
  __typename?: 'double_sign_vote_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Double_Sign_Vote_Var_Samp_Fields = {
  __typename?: 'double_sign_vote_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Double_Sign_Vote_Variance_Fields = {
  __typename?: 'double_sign_vote_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Variance_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_Allowance = {
  __typename?: 'fee_grant_allowance';
  allowance: Scalars['jsonb'];
  /** An object relationship */
  grantee: Account;
  grantee_address: Scalars['String'];
  /** An object relationship */
  granter: Account;
  granter_address: Scalars['String'];
  height: Scalars['bigint'];
  id: Scalars['Int'];
};


/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_AllowanceAllowanceArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate = {
  __typename?: 'fee_grant_allowance_aggregate';
  aggregate?: Maybe<Fee_Grant_Allowance_Aggregate_Fields>;
  nodes: Array<Fee_Grant_Allowance>;
};

/** aggregate fields of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate_Fields = {
  __typename?: 'fee_grant_allowance_aggregate_fields';
  avg?: Maybe<Fee_Grant_Allowance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Fee_Grant_Allowance_Max_Fields>;
  min?: Maybe<Fee_Grant_Allowance_Min_Fields>;
  stddev?: Maybe<Fee_Grant_Allowance_Stddev_Fields>;
  stddev_pop?: Maybe<Fee_Grant_Allowance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Fee_Grant_Allowance_Stddev_Samp_Fields>;
  sum?: Maybe<Fee_Grant_Allowance_Sum_Fields>;
  var_pop?: Maybe<Fee_Grant_Allowance_Var_Pop_Fields>;
  var_samp?: Maybe<Fee_Grant_Allowance_Var_Samp_Fields>;
  variance?: Maybe<Fee_Grant_Allowance_Variance_Fields>;
};


/** aggregate fields of "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Fee_Grant_Allowance_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Fee_Grant_Allowance_Append_Input = {
  allowance?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Fee_Grant_Allowance_Avg_Fields = {
  __typename?: 'fee_grant_allowance_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "fee_grant_allowance". All fields are combined with a logical 'AND'. */
export type Fee_Grant_Allowance_Bool_Exp = {
  _and?: Maybe<Array<Fee_Grant_Allowance_Bool_Exp>>;
  _not?: Maybe<Fee_Grant_Allowance_Bool_Exp>;
  _or?: Maybe<Array<Fee_Grant_Allowance_Bool_Exp>>;
  allowance?: Maybe<Jsonb_Comparison_Exp>;
  grantee?: Maybe<Account_Bool_Exp>;
  grantee_address?: Maybe<String_Comparison_Exp>;
  granter?: Maybe<Account_Bool_Exp>;
  granter_address?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "fee_grant_allowance" */
export enum Fee_Grant_Allowance_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeeGrantAllowancePkey = 'fee_grant_allowance_pkey',
  /** unique or primary key constraint on columns "granter_address", "grantee_address" */
  UniqueFeeGrantAllowance = 'unique_fee_grant_allowance'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Fee_Grant_Allowance_Delete_At_Path_Input = {
  allowance?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Fee_Grant_Allowance_Delete_Elem_Input = {
  allowance?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Fee_Grant_Allowance_Delete_Key_Input = {
  allowance?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Insert_Input = {
  allowance?: Maybe<Scalars['jsonb']>;
  grantee?: Maybe<Account_Obj_Rel_Insert_Input>;
  grantee_address?: Maybe<Scalars['String']>;
  granter?: Maybe<Account_Obj_Rel_Insert_Input>;
  granter_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Fee_Grant_Allowance_Max_Fields = {
  __typename?: 'fee_grant_allowance_max_fields';
  grantee_address?: Maybe<Scalars['String']>;
  granter_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Fee_Grant_Allowance_Min_Fields = {
  __typename?: 'fee_grant_allowance_min_fields';
  grantee_address?: Maybe<Scalars['String']>;
  granter_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Mutation_Response = {
  __typename?: 'fee_grant_allowance_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Fee_Grant_Allowance>;
};

/** on_conflict condition type for table "fee_grant_allowance" */
export type Fee_Grant_Allowance_On_Conflict = {
  constraint: Fee_Grant_Allowance_Constraint;
  update_columns?: Array<Fee_Grant_Allowance_Update_Column>;
  where?: Maybe<Fee_Grant_Allowance_Bool_Exp>;
};

/** Ordering options when selecting data from "fee_grant_allowance". */
export type Fee_Grant_Allowance_Order_By = {
  allowance?: Maybe<Order_By>;
  grantee?: Maybe<Account_Order_By>;
  grantee_address?: Maybe<Order_By>;
  granter?: Maybe<Account_Order_By>;
  granter_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: fee_grant_allowance */
export type Fee_Grant_Allowance_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Fee_Grant_Allowance_Prepend_Input = {
  allowance?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "fee_grant_allowance" */
export enum Fee_Grant_Allowance_Select_Column {
  /** column name */
  Allowance = 'allowance',
  /** column name */
  GranteeAddress = 'grantee_address',
  /** column name */
  GranterAddress = 'granter_address',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Set_Input = {
  allowance?: Maybe<Scalars['jsonb']>;
  grantee_address?: Maybe<Scalars['String']>;
  granter_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Fee_Grant_Allowance_Stddev_Fields = {
  __typename?: 'fee_grant_allowance_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Fee_Grant_Allowance_Stddev_Pop_Fields = {
  __typename?: 'fee_grant_allowance_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Fee_Grant_Allowance_Stddev_Samp_Fields = {
  __typename?: 'fee_grant_allowance_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fee_Grant_Allowance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fee_Grant_Allowance_Stream_Cursor_Value_Input = {
  allowance?: Maybe<Scalars['jsonb']>;
  grantee_address?: Maybe<Scalars['String']>;
  granter_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Fee_Grant_Allowance_Sum_Fields = {
  __typename?: 'fee_grant_allowance_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "fee_grant_allowance" */
export enum Fee_Grant_Allowance_Update_Column {
  /** column name */
  Allowance = 'allowance',
  /** column name */
  GranteeAddress = 'grantee_address',
  /** column name */
  GranterAddress = 'granter_address',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id'
}

export type Fee_Grant_Allowance_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: Maybe<Fee_Grant_Allowance_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: Maybe<Fee_Grant_Allowance_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: Maybe<Fee_Grant_Allowance_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: Maybe<Fee_Grant_Allowance_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Fee_Grant_Allowance_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: Maybe<Fee_Grant_Allowance_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Fee_Grant_Allowance_Set_Input>;
  where: Fee_Grant_Allowance_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Fee_Grant_Allowance_Var_Pop_Fields = {
  __typename?: 'fee_grant_allowance_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Fee_Grant_Allowance_Var_Samp_Fields = {
  __typename?: 'fee_grant_allowance_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Fee_Grant_Allowance_Variance_Fields = {
  __typename?: 'fee_grant_allowance_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "genesis" */
export type Genesis = {
  __typename?: 'genesis';
  chain_id: Scalars['String'];
  initial_height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  time: Scalars['timestamp'];
};

/** aggregated selection of "genesis" */
export type Genesis_Aggregate = {
  __typename?: 'genesis_aggregate';
  aggregate?: Maybe<Genesis_Aggregate_Fields>;
  nodes: Array<Genesis>;
};

/** aggregate fields of "genesis" */
export type Genesis_Aggregate_Fields = {
  __typename?: 'genesis_aggregate_fields';
  avg?: Maybe<Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Genesis_Max_Fields>;
  min?: Maybe<Genesis_Min_Fields>;
  stddev?: Maybe<Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Genesis_Sum_Fields>;
  var_pop?: Maybe<Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Genesis_Var_Samp_Fields>;
  variance?: Maybe<Genesis_Variance_Fields>;
};


/** aggregate fields of "genesis" */
export type Genesis_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Genesis_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Genesis_Avg_Fields = {
  __typename?: 'genesis_avg_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "genesis". All fields are combined with a logical 'AND'. */
export type Genesis_Bool_Exp = {
  _and?: Maybe<Array<Genesis_Bool_Exp>>;
  _not?: Maybe<Genesis_Bool_Exp>;
  _or?: Maybe<Array<Genesis_Bool_Exp>>;
  chain_id?: Maybe<String_Comparison_Exp>;
  initial_height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
  time?: Maybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "genesis" */
export enum Genesis_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  GenesisPkey = 'genesis_pkey'
}

/** input type for incrementing numeric columns in table "genesis" */
export type Genesis_Inc_Input = {
  initial_height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "genesis" */
export type Genesis_Insert_Input = {
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Genesis_Max_Fields = {
  __typename?: 'genesis_max_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Genesis_Min_Fields = {
  __typename?: 'genesis_min_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "genesis" */
export type Genesis_Mutation_Response = {
  __typename?: 'genesis_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Genesis>;
};

/** on_conflict condition type for table "genesis" */
export type Genesis_On_Conflict = {
  constraint: Genesis_Constraint;
  update_columns?: Array<Genesis_Update_Column>;
  where?: Maybe<Genesis_Bool_Exp>;
};

/** Ordering options when selecting data from "genesis". */
export type Genesis_Order_By = {
  chain_id?: Maybe<Order_By>;
  initial_height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** primary key columns input for table: genesis */
export type Genesis_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "genesis" */
export enum Genesis_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  InitialHeight = 'initial_height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Time = 'time'
}

/** input type for updating data in table "genesis" */
export type Genesis_Set_Input = {
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Genesis_Stddev_Fields = {
  __typename?: 'genesis_stddev_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Genesis_Stddev_Pop_Fields = {
  __typename?: 'genesis_stddev_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Genesis_Stddev_Samp_Fields = {
  __typename?: 'genesis_stddev_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "genesis" */
export type Genesis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Genesis_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Genesis_Stream_Cursor_Value_Input = {
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Genesis_Sum_Fields = {
  __typename?: 'genesis_sum_fields';
  initial_height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "genesis" */
export enum Genesis_Update_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  InitialHeight = 'initial_height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Time = 'time'
}

export type Genesis_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Genesis_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Genesis_Set_Input>;
  where: Genesis_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Genesis_Var_Pop_Fields = {
  __typename?: 'genesis_var_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Genesis_Var_Samp_Fields = {
  __typename?: 'genesis_var_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Genesis_Variance_Fields = {
  __typename?: 'genesis_variance_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "gov_params" */
export type Gov_Params = {
  __typename?: 'gov_params';
  deposit_params: Scalars['jsonb'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  tally_params: Scalars['jsonb'];
  voting_params: Scalars['jsonb'];
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsDeposit_ParamsArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsTally_ParamsArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsVoting_ParamsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "gov_params" */
export type Gov_Params_Aggregate = {
  __typename?: 'gov_params_aggregate';
  aggregate?: Maybe<Gov_Params_Aggregate_Fields>;
  nodes: Array<Gov_Params>;
};

/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_Fields = {
  __typename?: 'gov_params_aggregate_fields';
  avg?: Maybe<Gov_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Gov_Params_Max_Fields>;
  min?: Maybe<Gov_Params_Min_Fields>;
  stddev?: Maybe<Gov_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Gov_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gov_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Gov_Params_Sum_Fields>;
  var_pop?: Maybe<Gov_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Gov_Params_Var_Samp_Fields>;
  variance?: Maybe<Gov_Params_Variance_Fields>;
};


/** aggregate fields of "gov_params" */
export type Gov_Params_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Gov_Params_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Gov_Params_Append_Input = {
  deposit_params?: Maybe<Scalars['jsonb']>;
  tally_params?: Maybe<Scalars['jsonb']>;
  voting_params?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Gov_Params_Avg_Fields = {
  __typename?: 'gov_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "gov_params". All fields are combined with a logical 'AND'. */
export type Gov_Params_Bool_Exp = {
  _and?: Maybe<Array<Gov_Params_Bool_Exp>>;
  _not?: Maybe<Gov_Params_Bool_Exp>;
  _or?: Maybe<Array<Gov_Params_Bool_Exp>>;
  deposit_params?: Maybe<Jsonb_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
  tally_params?: Maybe<Jsonb_Comparison_Exp>;
  voting_params?: Maybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "gov_params" */
export enum Gov_Params_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  GovParamsPkey = 'gov_params_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Gov_Params_Delete_At_Path_Input = {
  deposit_params?: Maybe<Array<Scalars['String']>>;
  tally_params?: Maybe<Array<Scalars['String']>>;
  voting_params?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Gov_Params_Delete_Elem_Input = {
  deposit_params?: Maybe<Scalars['Int']>;
  tally_params?: Maybe<Scalars['Int']>;
  voting_params?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Gov_Params_Delete_Key_Input = {
  deposit_params?: Maybe<Scalars['String']>;
  tally_params?: Maybe<Scalars['String']>;
  voting_params?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "gov_params" */
export type Gov_Params_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "gov_params" */
export type Gov_Params_Insert_Input = {
  deposit_params?: Maybe<Scalars['jsonb']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  tally_params?: Maybe<Scalars['jsonb']>;
  voting_params?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Gov_Params_Max_Fields = {
  __typename?: 'gov_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Gov_Params_Min_Fields = {
  __typename?: 'gov_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "gov_params" */
export type Gov_Params_Mutation_Response = {
  __typename?: 'gov_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gov_Params>;
};

/** on_conflict condition type for table "gov_params" */
export type Gov_Params_On_Conflict = {
  constraint: Gov_Params_Constraint;
  update_columns?: Array<Gov_Params_Update_Column>;
  where?: Maybe<Gov_Params_Bool_Exp>;
};

/** Ordering options when selecting data from "gov_params". */
export type Gov_Params_Order_By = {
  deposit_params?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
  tally_params?: Maybe<Order_By>;
  voting_params?: Maybe<Order_By>;
};

/** primary key columns input for table: gov_params */
export type Gov_Params_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Gov_Params_Prepend_Input = {
  deposit_params?: Maybe<Scalars['jsonb']>;
  tally_params?: Maybe<Scalars['jsonb']>;
  voting_params?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "gov_params" */
export enum Gov_Params_Select_Column {
  /** column name */
  DepositParams = 'deposit_params',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  TallyParams = 'tally_params',
  /** column name */
  VotingParams = 'voting_params'
}

/** input type for updating data in table "gov_params" */
export type Gov_Params_Set_Input = {
  deposit_params?: Maybe<Scalars['jsonb']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  tally_params?: Maybe<Scalars['jsonb']>;
  voting_params?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Gov_Params_Stddev_Fields = {
  __typename?: 'gov_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Gov_Params_Stddev_Pop_Fields = {
  __typename?: 'gov_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Gov_Params_Stddev_Samp_Fields = {
  __typename?: 'gov_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "gov_params" */
export type Gov_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gov_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gov_Params_Stream_Cursor_Value_Input = {
  deposit_params?: Maybe<Scalars['jsonb']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  tally_params?: Maybe<Scalars['jsonb']>;
  voting_params?: Maybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Gov_Params_Sum_Fields = {
  __typename?: 'gov_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "gov_params" */
export enum Gov_Params_Update_Column {
  /** column name */
  DepositParams = 'deposit_params',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  TallyParams = 'tally_params',
  /** column name */
  VotingParams = 'voting_params'
}

export type Gov_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: Maybe<Gov_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: Maybe<Gov_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: Maybe<Gov_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: Maybe<Gov_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Gov_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: Maybe<Gov_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Gov_Params_Set_Input>;
  where: Gov_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Gov_Params_Var_Pop_Fields = {
  __typename?: 'gov_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Gov_Params_Var_Samp_Fields = {
  __typename?: 'gov_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Gov_Params_Variance_Fields = {
  __typename?: 'gov_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "inflation" */
export type Inflation = {
  __typename?: 'inflation';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  value: Scalars['numeric'];
};

/** aggregated selection of "inflation" */
export type Inflation_Aggregate = {
  __typename?: 'inflation_aggregate';
  aggregate?: Maybe<Inflation_Aggregate_Fields>;
  nodes: Array<Inflation>;
};

/** aggregate fields of "inflation" */
export type Inflation_Aggregate_Fields = {
  __typename?: 'inflation_aggregate_fields';
  avg?: Maybe<Inflation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inflation_Max_Fields>;
  min?: Maybe<Inflation_Min_Fields>;
  stddev?: Maybe<Inflation_Stddev_Fields>;
  stddev_pop?: Maybe<Inflation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inflation_Stddev_Samp_Fields>;
  sum?: Maybe<Inflation_Sum_Fields>;
  var_pop?: Maybe<Inflation_Var_Pop_Fields>;
  var_samp?: Maybe<Inflation_Var_Samp_Fields>;
  variance?: Maybe<Inflation_Variance_Fields>;
};


/** aggregate fields of "inflation" */
export type Inflation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Inflation_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Inflation_Avg_Fields = {
  __typename?: 'inflation_avg_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "inflation". All fields are combined with a logical 'AND'. */
export type Inflation_Bool_Exp = {
  _and?: Maybe<Array<Inflation_Bool_Exp>>;
  _not?: Maybe<Inflation_Bool_Exp>;
  _or?: Maybe<Array<Inflation_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
  value?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "inflation" */
export enum Inflation_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  InflationPkey = 'inflation_pkey'
}

/** input type for incrementing numeric columns in table "inflation" */
export type Inflation_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "inflation" */
export type Inflation_Insert_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Inflation_Max_Fields = {
  __typename?: 'inflation_max_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Inflation_Min_Fields = {
  __typename?: 'inflation_min_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "inflation" */
export type Inflation_Mutation_Response = {
  __typename?: 'inflation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Inflation>;
};

/** on_conflict condition type for table "inflation" */
export type Inflation_On_Conflict = {
  constraint: Inflation_Constraint;
  update_columns?: Array<Inflation_Update_Column>;
  where?: Maybe<Inflation_Bool_Exp>;
};

/** Ordering options when selecting data from "inflation". */
export type Inflation_Order_By = {
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: inflation */
export type Inflation_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "inflation" */
export enum Inflation_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "inflation" */
export type Inflation_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Inflation_Stddev_Fields = {
  __typename?: 'inflation_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Inflation_Stddev_Pop_Fields = {
  __typename?: 'inflation_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Inflation_Stddev_Samp_Fields = {
  __typename?: 'inflation_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "inflation" */
export type Inflation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Inflation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Inflation_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type Inflation_Sum_Fields = {
  __typename?: 'inflation_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** update columns of table "inflation" */
export enum Inflation_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Value = 'value'
}

export type Inflation_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Inflation_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Inflation_Set_Input>;
  where: Inflation_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Inflation_Var_Pop_Fields = {
  __typename?: 'inflation_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Inflation_Var_Samp_Fields = {
  __typename?: 'inflation_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Inflation_Variance_Fields = {
  __typename?: 'inflation_variance_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};


export type Jsonb_Cast_Exp = {
  String?: Maybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: Maybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message';
  height: Scalars['bigint'];
  index: Scalars['bigint'];
  involved_accounts_addresses: Scalars['_text'];
  partition_id: Scalars['bigint'];
  /** An object relationship */
  transaction?: Maybe<Transaction>;
  transaction_hash: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['jsonb'];
};


/** columns and relationships of "message" */
export type MessageValueArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "message" */
export type Message_Aggregate = {
  __typename?: 'message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  __typename?: 'message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Message_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Message_Append_Input = {
  value?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'message_avg_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: Maybe<Array<Message_Bool_Exp>>;
  _not?: Maybe<Message_Bool_Exp>;
  _or?: Maybe<Array<Message_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  index?: Maybe<Bigint_Comparison_Exp>;
  involved_accounts_addresses?: Maybe<_Text_Comparison_Exp>;
  partition_id?: Maybe<Bigint_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  transaction_hash?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  value?: Maybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "message" */
export enum Message_Constraint {
  /** unique or primary key constraint on columns "index", "partition_id", "transaction_hash" */
  UniqueMessagePerTx = 'unique_message_per_tx'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Message_Delete_At_Path_Input = {
  value?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Message_Delete_Elem_Input = {
  value?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Message_Delete_Key_Input = {
  value?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "message" */
export type Message_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  partition_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "message" */
export type Message_Insert_Input = {
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  involved_accounts_addresses?: Maybe<Scalars['_text']>;
  partition_id?: Maybe<Scalars['bigint']>;
  transaction?: Maybe<Transaction_Obj_Rel_Insert_Input>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'message_max_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  partition_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'message_min_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  partition_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "message" */
export type Message_Mutation_Response = {
  __typename?: 'message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns?: Array<Message_Update_Column>;
  where?: Maybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  height?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  involved_accounts_addresses?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  transaction_hash?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Message_Prepend_Input = {
  value?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "message" */
export type Message_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  involved_accounts_addresses?: Maybe<Scalars['_text']>;
  partition_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'message_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'message_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'message_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  involved_accounts_addresses?: Maybe<Scalars['_text']>;
  partition_id?: Maybe<Scalars['bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'message_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  partition_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "message" */
export enum Message_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

export type Message_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: Maybe<Message_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: Maybe<Message_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: Maybe<Message_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: Maybe<Message_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Message_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: Maybe<Message_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'message_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'message_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'message_variance_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Messages_By_Address_Args = {
  addresses?: Maybe<Scalars['_text']>;
  limit?: Maybe<Scalars['bigint']>;
  offset?: Maybe<Scalars['bigint']>;
  types?: Maybe<Scalars['_text']>;
};

/** columns and relationships of "mint_params" */
export type Mint_Params = {
  __typename?: 'mint_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "mint_params" */
export type Mint_ParamsParamsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "mint_params" */
export type Mint_Params_Aggregate = {
  __typename?: 'mint_params_aggregate';
  aggregate?: Maybe<Mint_Params_Aggregate_Fields>;
  nodes: Array<Mint_Params>;
};

/** aggregate fields of "mint_params" */
export type Mint_Params_Aggregate_Fields = {
  __typename?: 'mint_params_aggregate_fields';
  avg?: Maybe<Mint_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Mint_Params_Max_Fields>;
  min?: Maybe<Mint_Params_Min_Fields>;
  stddev?: Maybe<Mint_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Mint_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Mint_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Mint_Params_Sum_Fields>;
  var_pop?: Maybe<Mint_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Mint_Params_Var_Samp_Fields>;
  variance?: Maybe<Mint_Params_Variance_Fields>;
};


/** aggregate fields of "mint_params" */
export type Mint_Params_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Mint_Params_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Mint_Params_Append_Input = {
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Mint_Params_Avg_Fields = {
  __typename?: 'mint_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mint_params". All fields are combined with a logical 'AND'. */
export type Mint_Params_Bool_Exp = {
  _and?: Maybe<Array<Mint_Params_Bool_Exp>>;
  _not?: Maybe<Mint_Params_Bool_Exp>;
  _or?: Maybe<Array<Mint_Params_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
  params?: Maybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "mint_params" */
export enum Mint_Params_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  MintParamsPkey = 'mint_params_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Mint_Params_Delete_At_Path_Input = {
  params?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Mint_Params_Delete_Elem_Input = {
  params?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Mint_Params_Delete_Key_Input = {
  params?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "mint_params" */
export type Mint_Params_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "mint_params" */
export type Mint_Params_Insert_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Mint_Params_Max_Fields = {
  __typename?: 'mint_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Mint_Params_Min_Fields = {
  __typename?: 'mint_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "mint_params" */
export type Mint_Params_Mutation_Response = {
  __typename?: 'mint_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Mint_Params>;
};

/** on_conflict condition type for table "mint_params" */
export type Mint_Params_On_Conflict = {
  constraint: Mint_Params_Constraint;
  update_columns?: Array<Mint_Params_Update_Column>;
  where?: Maybe<Mint_Params_Bool_Exp>;
};

/** Ordering options when selecting data from "mint_params". */
export type Mint_Params_Order_By = {
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
  params?: Maybe<Order_By>;
};

/** primary key columns input for table: mint_params */
export type Mint_Params_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Mint_Params_Prepend_Input = {
  params?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "mint_params" */
export enum Mint_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "mint_params" */
export type Mint_Params_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Mint_Params_Stddev_Fields = {
  __typename?: 'mint_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Mint_Params_Stddev_Pop_Fields = {
  __typename?: 'mint_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Mint_Params_Stddev_Samp_Fields = {
  __typename?: 'mint_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mint_params" */
export type Mint_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mint_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mint_Params_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Mint_Params_Sum_Fields = {
  __typename?: 'mint_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "mint_params" */
export enum Mint_Params_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

export type Mint_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: Maybe<Mint_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: Maybe<Mint_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: Maybe<Mint_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: Maybe<Mint_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Mint_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: Maybe<Mint_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Mint_Params_Set_Input>;
  where: Mint_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Mint_Params_Var_Pop_Fields = {
  __typename?: 'mint_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Mint_Params_Var_Samp_Fields = {
  __typename?: 'mint_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Mint_Params_Variance_Fields = {
  __typename?: 'mint_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "modules" */
export type Modules = {
  __typename?: 'modules';
  module_name: Scalars['String'];
};

/** aggregated selection of "modules" */
export type Modules_Aggregate = {
  __typename?: 'modules_aggregate';
  aggregate?: Maybe<Modules_Aggregate_Fields>;
  nodes: Array<Modules>;
};

/** aggregate fields of "modules" */
export type Modules_Aggregate_Fields = {
  __typename?: 'modules_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Modules_Max_Fields>;
  min?: Maybe<Modules_Min_Fields>;
};


/** aggregate fields of "modules" */
export type Modules_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Modules_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "modules". All fields are combined with a logical 'AND'. */
export type Modules_Bool_Exp = {
  _and?: Maybe<Array<Modules_Bool_Exp>>;
  _not?: Maybe<Modules_Bool_Exp>;
  _or?: Maybe<Array<Modules_Bool_Exp>>;
  module_name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "modules" */
export enum Modules_Constraint {
  /** unique or primary key constraint on columns "module_name" */
  ModulesPkey = 'modules_pkey'
}

/** input type for inserting data into table "modules" */
export type Modules_Insert_Input = {
  module_name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Modules_Max_Fields = {
  __typename?: 'modules_max_fields';
  module_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Modules_Min_Fields = {
  __typename?: 'modules_min_fields';
  module_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "modules" */
export type Modules_Mutation_Response = {
  __typename?: 'modules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Modules>;
};

/** on_conflict condition type for table "modules" */
export type Modules_On_Conflict = {
  constraint: Modules_Constraint;
  update_columns?: Array<Modules_Update_Column>;
  where?: Maybe<Modules_Bool_Exp>;
};

/** Ordering options when selecting data from "modules". */
export type Modules_Order_By = {
  module_name?: Maybe<Order_By>;
};

/** primary key columns input for table: modules */
export type Modules_Pk_Columns_Input = {
  module_name: Scalars['String'];
};

/** select columns of table "modules" */
export enum Modules_Select_Column {
  /** column name */
  ModuleName = 'module_name'
}

/** input type for updating data in table "modules" */
export type Modules_Set_Input = {
  module_name?: Maybe<Scalars['String']>;
};

/** Streaming cursor of the table "modules" */
export type Modules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Modules_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Modules_Stream_Cursor_Value_Input = {
  module_name?: Maybe<Scalars['String']>;
};

/** update columns of table "modules" */
export enum Modules_Update_Column {
  /** column name */
  ModuleName = 'module_name'
}

export type Modules_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Modules_Set_Input>;
  where: Modules_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "account" */
  delete_account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "account" */
  delete_account_by_pk?: Maybe<Account>;
  /** delete data from the table: "average_block_time_from_genesis" */
  delete_average_block_time_from_genesis?: Maybe<Average_Block_Time_From_Genesis_Mutation_Response>;
  /** delete single row from the table: "average_block_time_from_genesis" */
  delete_average_block_time_from_genesis_by_pk?: Maybe<Average_Block_Time_From_Genesis>;
  /** delete data from the table: "average_block_time_per_day" */
  delete_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_day" */
  delete_average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** delete data from the table: "average_block_time_per_hour" */
  delete_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_hour" */
  delete_average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** delete data from the table: "average_block_time_per_minute" */
  delete_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** delete single row from the table: "average_block_time_per_minute" */
  delete_average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** delete data from the table: "block" */
  delete_block?: Maybe<Block_Mutation_Response>;
  /** delete single row from the table: "block" */
  delete_block_by_pk?: Maybe<Block>;
  /** delete data from the table: "community_pool" */
  delete_community_pool?: Maybe<Community_Pool_Mutation_Response>;
  /** delete single row from the table: "community_pool" */
  delete_community_pool_by_pk?: Maybe<Community_Pool>;
  /** delete data from the table: "distribution_params" */
  delete_distribution_params?: Maybe<Distribution_Params_Mutation_Response>;
  /** delete single row from the table: "distribution_params" */
  delete_distribution_params_by_pk?: Maybe<Distribution_Params>;
  /** delete data from the table: "double_sign_evidence" */
  delete_double_sign_evidence?: Maybe<Double_Sign_Evidence_Mutation_Response>;
  /** delete data from the table: "double_sign_vote" */
  delete_double_sign_vote?: Maybe<Double_Sign_Vote_Mutation_Response>;
  /** delete single row from the table: "double_sign_vote" */
  delete_double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** delete data from the table: "fee_grant_allowance" */
  delete_fee_grant_allowance?: Maybe<Fee_Grant_Allowance_Mutation_Response>;
  /** delete single row from the table: "fee_grant_allowance" */
  delete_fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>;
  /** delete data from the table: "genesis" */
  delete_genesis?: Maybe<Genesis_Mutation_Response>;
  /** delete single row from the table: "genesis" */
  delete_genesis_by_pk?: Maybe<Genesis>;
  /** delete data from the table: "gov_params" */
  delete_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** delete single row from the table: "gov_params" */
  delete_gov_params_by_pk?: Maybe<Gov_Params>;
  /** delete data from the table: "inflation" */
  delete_inflation?: Maybe<Inflation_Mutation_Response>;
  /** delete single row from the table: "inflation" */
  delete_inflation_by_pk?: Maybe<Inflation>;
  /** delete data from the table: "message" */
  delete_message?: Maybe<Message_Mutation_Response>;
  /** delete data from the table: "mint_params" */
  delete_mint_params?: Maybe<Mint_Params_Mutation_Response>;
  /** delete single row from the table: "mint_params" */
  delete_mint_params_by_pk?: Maybe<Mint_Params>;
  /** delete data from the table: "modules" */
  delete_modules?: Maybe<Modules_Mutation_Response>;
  /** delete single row from the table: "modules" */
  delete_modules_by_pk?: Maybe<Modules>;
  /** delete data from the table: "pre_commit" */
  delete_pre_commit?: Maybe<Pre_Commit_Mutation_Response>;
  /** delete data from the table: "proposal" */
  delete_proposal?: Maybe<Proposal_Mutation_Response>;
  /** delete single row from the table: "proposal" */
  delete_proposal_by_pk?: Maybe<Proposal>;
  /** delete data from the table: "proposal_deposit" */
  delete_proposal_deposit?: Maybe<Proposal_Deposit_Mutation_Response>;
  /** delete data from the table: "proposal_staking_pool_snapshot" */
  delete_proposal_staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>;
  /** delete single row from the table: "proposal_staking_pool_snapshot" */
  delete_proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** delete data from the table: "proposal_tally_result" */
  delete_proposal_tally_result?: Maybe<Proposal_Tally_Result_Mutation_Response>;
  /** delete single row from the table: "proposal_tally_result" */
  delete_proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** delete data from the table: "proposal_validator_status_snapshot" */
  delete_proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>;
  /** delete single row from the table: "proposal_validator_status_snapshot" */
  delete_proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** delete data from the table: "proposal_vote" */
  delete_proposal_vote?: Maybe<Proposal_Vote_Mutation_Response>;
  /** delete data from the table: "slashing_params" */
  delete_slashing_params?: Maybe<Slashing_Params_Mutation_Response>;
  /** delete single row from the table: "slashing_params" */
  delete_slashing_params_by_pk?: Maybe<Slashing_Params>;
  /** delete data from the table: "staking_params" */
  delete_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** delete single row from the table: "staking_params" */
  delete_staking_params_by_pk?: Maybe<Staking_Params>;
  /** delete data from the table: "staking_pool" */
  delete_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** delete single row from the table: "staking_pool" */
  delete_staking_pool_by_pk?: Maybe<Staking_Pool>;
  /** delete data from the table: "supply" */
  delete_supply?: Maybe<Supply_Mutation_Response>;
  /** delete single row from the table: "supply" */
  delete_supply_by_pk?: Maybe<Supply>;
  /** delete data from the table: "token" */
  delete_token?: Maybe<Token_Mutation_Response>;
  /** delete data from the table: "token_price" */
  delete_token_price?: Maybe<Token_Price_Mutation_Response>;
  /** delete single row from the table: "token_price" */
  delete_token_price_by_pk?: Maybe<Token_Price>;
  /** delete data from the table: "token_price_history" */
  delete_token_price_history?: Maybe<Token_Price_History_Mutation_Response>;
  /** delete single row from the table: "token_price_history" */
  delete_token_price_history_by_pk?: Maybe<Token_Price_History>;
  /** delete data from the table: "token_unit" */
  delete_token_unit?: Maybe<Token_Unit_Mutation_Response>;
  /** delete data from the table: "transaction" */
  delete_transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete data from the table: "validator" */
  delete_validator?: Maybe<Validator_Mutation_Response>;
  /** delete single row from the table: "validator" */
  delete_validator_by_pk?: Maybe<Validator>;
  /** delete data from the table: "validator_commission" */
  delete_validator_commission?: Maybe<Validator_Commission_Mutation_Response>;
  /** delete single row from the table: "validator_commission" */
  delete_validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** delete data from the table: "validator_description" */
  delete_validator_description?: Maybe<Validator_Description_Mutation_Response>;
  /** delete single row from the table: "validator_description" */
  delete_validator_description_by_pk?: Maybe<Validator_Description>;
  /** delete data from the table: "validator_info" */
  delete_validator_info?: Maybe<Validator_Info_Mutation_Response>;
  /** delete single row from the table: "validator_info" */
  delete_validator_info_by_pk?: Maybe<Validator_Info>;
  /** delete data from the table: "validator_signing_info" */
  delete_validator_signing_info?: Maybe<Validator_Signing_Info_Mutation_Response>;
  /** delete single row from the table: "validator_signing_info" */
  delete_validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** delete data from the table: "validator_status" */
  delete_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** delete single row from the table: "validator_status" */
  delete_validator_status_by_pk?: Maybe<Validator_Status>;
  /** delete data from the table: "validator_voting_power" */
  delete_validator_voting_power?: Maybe<Validator_Voting_Power_Mutation_Response>;
  /** delete single row from the table: "validator_voting_power" */
  delete_validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** delete data from the table: "vesting_account" */
  delete_vesting_account?: Maybe<Vesting_Account_Mutation_Response>;
  /** delete single row from the table: "vesting_account" */
  delete_vesting_account_by_pk?: Maybe<Vesting_Account>;
  /** delete data from the table: "vesting_period" */
  delete_vesting_period?: Maybe<Vesting_Period_Mutation_Response>;
  /** insert data into the table: "account" */
  insert_account?: Maybe<Account_Mutation_Response>;
  /** insert a single row into the table: "account" */
  insert_account_one?: Maybe<Account>;
  /** insert data into the table: "average_block_time_from_genesis" */
  insert_average_block_time_from_genesis?: Maybe<Average_Block_Time_From_Genesis_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_from_genesis" */
  insert_average_block_time_from_genesis_one?: Maybe<Average_Block_Time_From_Genesis>;
  /** insert data into the table: "average_block_time_per_day" */
  insert_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_day" */
  insert_average_block_time_per_day_one?: Maybe<Average_Block_Time_Per_Day>;
  /** insert data into the table: "average_block_time_per_hour" */
  insert_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_hour" */
  insert_average_block_time_per_hour_one?: Maybe<Average_Block_Time_Per_Hour>;
  /** insert data into the table: "average_block_time_per_minute" */
  insert_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** insert a single row into the table: "average_block_time_per_minute" */
  insert_average_block_time_per_minute_one?: Maybe<Average_Block_Time_Per_Minute>;
  /** insert data into the table: "block" */
  insert_block?: Maybe<Block_Mutation_Response>;
  /** insert a single row into the table: "block" */
  insert_block_one?: Maybe<Block>;
  /** insert data into the table: "community_pool" */
  insert_community_pool?: Maybe<Community_Pool_Mutation_Response>;
  /** insert a single row into the table: "community_pool" */
  insert_community_pool_one?: Maybe<Community_Pool>;
  /** insert data into the table: "distribution_params" */
  insert_distribution_params?: Maybe<Distribution_Params_Mutation_Response>;
  /** insert a single row into the table: "distribution_params" */
  insert_distribution_params_one?: Maybe<Distribution_Params>;
  /** insert data into the table: "double_sign_evidence" */
  insert_double_sign_evidence?: Maybe<Double_Sign_Evidence_Mutation_Response>;
  /** insert a single row into the table: "double_sign_evidence" */
  insert_double_sign_evidence_one?: Maybe<Double_Sign_Evidence>;
  /** insert data into the table: "double_sign_vote" */
  insert_double_sign_vote?: Maybe<Double_Sign_Vote_Mutation_Response>;
  /** insert a single row into the table: "double_sign_vote" */
  insert_double_sign_vote_one?: Maybe<Double_Sign_Vote>;
  /** insert data into the table: "fee_grant_allowance" */
  insert_fee_grant_allowance?: Maybe<Fee_Grant_Allowance_Mutation_Response>;
  /** insert a single row into the table: "fee_grant_allowance" */
  insert_fee_grant_allowance_one?: Maybe<Fee_Grant_Allowance>;
  /** insert data into the table: "genesis" */
  insert_genesis?: Maybe<Genesis_Mutation_Response>;
  /** insert a single row into the table: "genesis" */
  insert_genesis_one?: Maybe<Genesis>;
  /** insert data into the table: "gov_params" */
  insert_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** insert a single row into the table: "gov_params" */
  insert_gov_params_one?: Maybe<Gov_Params>;
  /** insert data into the table: "inflation" */
  insert_inflation?: Maybe<Inflation_Mutation_Response>;
  /** insert a single row into the table: "inflation" */
  insert_inflation_one?: Maybe<Inflation>;
  /** insert data into the table: "message" */
  insert_message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "message" */
  insert_message_one?: Maybe<Message>;
  /** insert data into the table: "mint_params" */
  insert_mint_params?: Maybe<Mint_Params_Mutation_Response>;
  /** insert a single row into the table: "mint_params" */
  insert_mint_params_one?: Maybe<Mint_Params>;
  /** insert data into the table: "modules" */
  insert_modules?: Maybe<Modules_Mutation_Response>;
  /** insert a single row into the table: "modules" */
  insert_modules_one?: Maybe<Modules>;
  /** insert data into the table: "pre_commit" */
  insert_pre_commit?: Maybe<Pre_Commit_Mutation_Response>;
  /** insert a single row into the table: "pre_commit" */
  insert_pre_commit_one?: Maybe<Pre_Commit>;
  /** insert data into the table: "proposal" */
  insert_proposal?: Maybe<Proposal_Mutation_Response>;
  /** insert data into the table: "proposal_deposit" */
  insert_proposal_deposit?: Maybe<Proposal_Deposit_Mutation_Response>;
  /** insert a single row into the table: "proposal_deposit" */
  insert_proposal_deposit_one?: Maybe<Proposal_Deposit>;
  /** insert a single row into the table: "proposal" */
  insert_proposal_one?: Maybe<Proposal>;
  /** insert data into the table: "proposal_staking_pool_snapshot" */
  insert_proposal_staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>;
  /** insert a single row into the table: "proposal_staking_pool_snapshot" */
  insert_proposal_staking_pool_snapshot_one?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** insert data into the table: "proposal_tally_result" */
  insert_proposal_tally_result?: Maybe<Proposal_Tally_Result_Mutation_Response>;
  /** insert a single row into the table: "proposal_tally_result" */
  insert_proposal_tally_result_one?: Maybe<Proposal_Tally_Result>;
  /** insert data into the table: "proposal_validator_status_snapshot" */
  insert_proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>;
  /** insert a single row into the table: "proposal_validator_status_snapshot" */
  insert_proposal_validator_status_snapshot_one?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** insert data into the table: "proposal_vote" */
  insert_proposal_vote?: Maybe<Proposal_Vote_Mutation_Response>;
  /** insert a single row into the table: "proposal_vote" */
  insert_proposal_vote_one?: Maybe<Proposal_Vote>;
  /** insert data into the table: "slashing_params" */
  insert_slashing_params?: Maybe<Slashing_Params_Mutation_Response>;
  /** insert a single row into the table: "slashing_params" */
  insert_slashing_params_one?: Maybe<Slashing_Params>;
  /** insert data into the table: "staking_params" */
  insert_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** insert a single row into the table: "staking_params" */
  insert_staking_params_one?: Maybe<Staking_Params>;
  /** insert data into the table: "staking_pool" */
  insert_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** insert a single row into the table: "staking_pool" */
  insert_staking_pool_one?: Maybe<Staking_Pool>;
  /** insert data into the table: "supply" */
  insert_supply?: Maybe<Supply_Mutation_Response>;
  /** insert a single row into the table: "supply" */
  insert_supply_one?: Maybe<Supply>;
  /** insert data into the table: "token" */
  insert_token?: Maybe<Token_Mutation_Response>;
  /** insert a single row into the table: "token" */
  insert_token_one?: Maybe<Token>;
  /** insert data into the table: "token_price" */
  insert_token_price?: Maybe<Token_Price_Mutation_Response>;
  /** insert data into the table: "token_price_history" */
  insert_token_price_history?: Maybe<Token_Price_History_Mutation_Response>;
  /** insert a single row into the table: "token_price_history" */
  insert_token_price_history_one?: Maybe<Token_Price_History>;
  /** insert a single row into the table: "token_price" */
  insert_token_price_one?: Maybe<Token_Price>;
  /** insert data into the table: "token_unit" */
  insert_token_unit?: Maybe<Token_Unit_Mutation_Response>;
  /** insert a single row into the table: "token_unit" */
  insert_token_unit_one?: Maybe<Token_Unit>;
  /** insert data into the table: "transaction" */
  insert_transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert a single row into the table: "transaction" */
  insert_transaction_one?: Maybe<Transaction>;
  /** insert data into the table: "validator" */
  insert_validator?: Maybe<Validator_Mutation_Response>;
  /** insert data into the table: "validator_commission" */
  insert_validator_commission?: Maybe<Validator_Commission_Mutation_Response>;
  /** insert a single row into the table: "validator_commission" */
  insert_validator_commission_one?: Maybe<Validator_Commission>;
  /** insert data into the table: "validator_description" */
  insert_validator_description?: Maybe<Validator_Description_Mutation_Response>;
  /** insert a single row into the table: "validator_description" */
  insert_validator_description_one?: Maybe<Validator_Description>;
  /** insert data into the table: "validator_info" */
  insert_validator_info?: Maybe<Validator_Info_Mutation_Response>;
  /** insert a single row into the table: "validator_info" */
  insert_validator_info_one?: Maybe<Validator_Info>;
  /** insert a single row into the table: "validator" */
  insert_validator_one?: Maybe<Validator>;
  /** insert data into the table: "validator_signing_info" */
  insert_validator_signing_info?: Maybe<Validator_Signing_Info_Mutation_Response>;
  /** insert a single row into the table: "validator_signing_info" */
  insert_validator_signing_info_one?: Maybe<Validator_Signing_Info>;
  /** insert data into the table: "validator_status" */
  insert_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** insert a single row into the table: "validator_status" */
  insert_validator_status_one?: Maybe<Validator_Status>;
  /** insert data into the table: "validator_voting_power" */
  insert_validator_voting_power?: Maybe<Validator_Voting_Power_Mutation_Response>;
  /** insert a single row into the table: "validator_voting_power" */
  insert_validator_voting_power_one?: Maybe<Validator_Voting_Power>;
  /** insert data into the table: "vesting_account" */
  insert_vesting_account?: Maybe<Vesting_Account_Mutation_Response>;
  /** insert a single row into the table: "vesting_account" */
  insert_vesting_account_one?: Maybe<Vesting_Account>;
  /** insert data into the table: "vesting_period" */
  insert_vesting_period?: Maybe<Vesting_Period_Mutation_Response>;
  /** insert a single row into the table: "vesting_period" */
  insert_vesting_period_one?: Maybe<Vesting_Period>;
  /** update data of the table: "account" */
  update_account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "account" */
  update_account_by_pk?: Maybe<Account>;
  /** update multiples rows of table: "account" */
  update_account_many?: Maybe<Array<Maybe<Account_Mutation_Response>>>;
  /** update data of the table: "average_block_time_from_genesis" */
  update_average_block_time_from_genesis?: Maybe<Average_Block_Time_From_Genesis_Mutation_Response>;
  /** update single row of the table: "average_block_time_from_genesis" */
  update_average_block_time_from_genesis_by_pk?: Maybe<Average_Block_Time_From_Genesis>;
  /** update multiples rows of table: "average_block_time_from_genesis" */
  update_average_block_time_from_genesis_many?: Maybe<Array<Maybe<Average_Block_Time_From_Genesis_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_day" */
  update_average_block_time_per_day?: Maybe<Average_Block_Time_Per_Day_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_day" */
  update_average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** update multiples rows of table: "average_block_time_per_day" */
  update_average_block_time_per_day_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Day_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_hour" */
  update_average_block_time_per_hour?: Maybe<Average_Block_Time_Per_Hour_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_hour" */
  update_average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** update multiples rows of table: "average_block_time_per_hour" */
  update_average_block_time_per_hour_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Hour_Mutation_Response>>>;
  /** update data of the table: "average_block_time_per_minute" */
  update_average_block_time_per_minute?: Maybe<Average_Block_Time_Per_Minute_Mutation_Response>;
  /** update single row of the table: "average_block_time_per_minute" */
  update_average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** update multiples rows of table: "average_block_time_per_minute" */
  update_average_block_time_per_minute_many?: Maybe<Array<Maybe<Average_Block_Time_Per_Minute_Mutation_Response>>>;
  /** update data of the table: "block" */
  update_block?: Maybe<Block_Mutation_Response>;
  /** update single row of the table: "block" */
  update_block_by_pk?: Maybe<Block>;
  /** update multiples rows of table: "block" */
  update_block_many?: Maybe<Array<Maybe<Block_Mutation_Response>>>;
  /** update data of the table: "community_pool" */
  update_community_pool?: Maybe<Community_Pool_Mutation_Response>;
  /** update single row of the table: "community_pool" */
  update_community_pool_by_pk?: Maybe<Community_Pool>;
  /** update multiples rows of table: "community_pool" */
  update_community_pool_many?: Maybe<Array<Maybe<Community_Pool_Mutation_Response>>>;
  /** update data of the table: "distribution_params" */
  update_distribution_params?: Maybe<Distribution_Params_Mutation_Response>;
  /** update single row of the table: "distribution_params" */
  update_distribution_params_by_pk?: Maybe<Distribution_Params>;
  /** update multiples rows of table: "distribution_params" */
  update_distribution_params_many?: Maybe<Array<Maybe<Distribution_Params_Mutation_Response>>>;
  /** update data of the table: "double_sign_evidence" */
  update_double_sign_evidence?: Maybe<Double_Sign_Evidence_Mutation_Response>;
  /** update multiples rows of table: "double_sign_evidence" */
  update_double_sign_evidence_many?: Maybe<Array<Maybe<Double_Sign_Evidence_Mutation_Response>>>;
  /** update data of the table: "double_sign_vote" */
  update_double_sign_vote?: Maybe<Double_Sign_Vote_Mutation_Response>;
  /** update single row of the table: "double_sign_vote" */
  update_double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** update multiples rows of table: "double_sign_vote" */
  update_double_sign_vote_many?: Maybe<Array<Maybe<Double_Sign_Vote_Mutation_Response>>>;
  /** update data of the table: "fee_grant_allowance" */
  update_fee_grant_allowance?: Maybe<Fee_Grant_Allowance_Mutation_Response>;
  /** update single row of the table: "fee_grant_allowance" */
  update_fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>;
  /** update multiples rows of table: "fee_grant_allowance" */
  update_fee_grant_allowance_many?: Maybe<Array<Maybe<Fee_Grant_Allowance_Mutation_Response>>>;
  /** update data of the table: "genesis" */
  update_genesis?: Maybe<Genesis_Mutation_Response>;
  /** update single row of the table: "genesis" */
  update_genesis_by_pk?: Maybe<Genesis>;
  /** update multiples rows of table: "genesis" */
  update_genesis_many?: Maybe<Array<Maybe<Genesis_Mutation_Response>>>;
  /** update data of the table: "gov_params" */
  update_gov_params?: Maybe<Gov_Params_Mutation_Response>;
  /** update single row of the table: "gov_params" */
  update_gov_params_by_pk?: Maybe<Gov_Params>;
  /** update multiples rows of table: "gov_params" */
  update_gov_params_many?: Maybe<Array<Maybe<Gov_Params_Mutation_Response>>>;
  /** update data of the table: "inflation" */
  update_inflation?: Maybe<Inflation_Mutation_Response>;
  /** update single row of the table: "inflation" */
  update_inflation_by_pk?: Maybe<Inflation>;
  /** update multiples rows of table: "inflation" */
  update_inflation_many?: Maybe<Array<Maybe<Inflation_Mutation_Response>>>;
  /** update data of the table: "message" */
  update_message?: Maybe<Message_Mutation_Response>;
  /** update multiples rows of table: "message" */
  update_message_many?: Maybe<Array<Maybe<Message_Mutation_Response>>>;
  /** update data of the table: "mint_params" */
  update_mint_params?: Maybe<Mint_Params_Mutation_Response>;
  /** update single row of the table: "mint_params" */
  update_mint_params_by_pk?: Maybe<Mint_Params>;
  /** update multiples rows of table: "mint_params" */
  update_mint_params_many?: Maybe<Array<Maybe<Mint_Params_Mutation_Response>>>;
  /** update data of the table: "modules" */
  update_modules?: Maybe<Modules_Mutation_Response>;
  /** update single row of the table: "modules" */
  update_modules_by_pk?: Maybe<Modules>;
  /** update multiples rows of table: "modules" */
  update_modules_many?: Maybe<Array<Maybe<Modules_Mutation_Response>>>;
  /** update data of the table: "pre_commit" */
  update_pre_commit?: Maybe<Pre_Commit_Mutation_Response>;
  /** update multiples rows of table: "pre_commit" */
  update_pre_commit_many?: Maybe<Array<Maybe<Pre_Commit_Mutation_Response>>>;
  /** update data of the table: "proposal" */
  update_proposal?: Maybe<Proposal_Mutation_Response>;
  /** update single row of the table: "proposal" */
  update_proposal_by_pk?: Maybe<Proposal>;
  /** update data of the table: "proposal_deposit" */
  update_proposal_deposit?: Maybe<Proposal_Deposit_Mutation_Response>;
  /** update multiples rows of table: "proposal_deposit" */
  update_proposal_deposit_many?: Maybe<Array<Maybe<Proposal_Deposit_Mutation_Response>>>;
  /** update multiples rows of table: "proposal" */
  update_proposal_many?: Maybe<Array<Maybe<Proposal_Mutation_Response>>>;
  /** update data of the table: "proposal_staking_pool_snapshot" */
  update_proposal_staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>;
  /** update single row of the table: "proposal_staking_pool_snapshot" */
  update_proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** update multiples rows of table: "proposal_staking_pool_snapshot" */
  update_proposal_staking_pool_snapshot_many?: Maybe<Array<Maybe<Proposal_Staking_Pool_Snapshot_Mutation_Response>>>;
  /** update data of the table: "proposal_tally_result" */
  update_proposal_tally_result?: Maybe<Proposal_Tally_Result_Mutation_Response>;
  /** update single row of the table: "proposal_tally_result" */
  update_proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** update multiples rows of table: "proposal_tally_result" */
  update_proposal_tally_result_many?: Maybe<Array<Maybe<Proposal_Tally_Result_Mutation_Response>>>;
  /** update data of the table: "proposal_validator_status_snapshot" */
  update_proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>;
  /** update single row of the table: "proposal_validator_status_snapshot" */
  update_proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** update multiples rows of table: "proposal_validator_status_snapshot" */
  update_proposal_validator_status_snapshot_many?: Maybe<Array<Maybe<Proposal_Validator_Status_Snapshot_Mutation_Response>>>;
  /** update data of the table: "proposal_vote" */
  update_proposal_vote?: Maybe<Proposal_Vote_Mutation_Response>;
  /** update multiples rows of table: "proposal_vote" */
  update_proposal_vote_many?: Maybe<Array<Maybe<Proposal_Vote_Mutation_Response>>>;
  /** update data of the table: "slashing_params" */
  update_slashing_params?: Maybe<Slashing_Params_Mutation_Response>;
  /** update single row of the table: "slashing_params" */
  update_slashing_params_by_pk?: Maybe<Slashing_Params>;
  /** update multiples rows of table: "slashing_params" */
  update_slashing_params_many?: Maybe<Array<Maybe<Slashing_Params_Mutation_Response>>>;
  /** update data of the table: "staking_params" */
  update_staking_params?: Maybe<Staking_Params_Mutation_Response>;
  /** update single row of the table: "staking_params" */
  update_staking_params_by_pk?: Maybe<Staking_Params>;
  /** update multiples rows of table: "staking_params" */
  update_staking_params_many?: Maybe<Array<Maybe<Staking_Params_Mutation_Response>>>;
  /** update data of the table: "staking_pool" */
  update_staking_pool?: Maybe<Staking_Pool_Mutation_Response>;
  /** update single row of the table: "staking_pool" */
  update_staking_pool_by_pk?: Maybe<Staking_Pool>;
  /** update multiples rows of table: "staking_pool" */
  update_staking_pool_many?: Maybe<Array<Maybe<Staking_Pool_Mutation_Response>>>;
  /** update data of the table: "supply" */
  update_supply?: Maybe<Supply_Mutation_Response>;
  /** update single row of the table: "supply" */
  update_supply_by_pk?: Maybe<Supply>;
  /** update multiples rows of table: "supply" */
  update_supply_many?: Maybe<Array<Maybe<Supply_Mutation_Response>>>;
  /** update data of the table: "token" */
  update_token?: Maybe<Token_Mutation_Response>;
  /** update multiples rows of table: "token" */
  update_token_many?: Maybe<Array<Maybe<Token_Mutation_Response>>>;
  /** update data of the table: "token_price" */
  update_token_price?: Maybe<Token_Price_Mutation_Response>;
  /** update single row of the table: "token_price" */
  update_token_price_by_pk?: Maybe<Token_Price>;
  /** update data of the table: "token_price_history" */
  update_token_price_history?: Maybe<Token_Price_History_Mutation_Response>;
  /** update single row of the table: "token_price_history" */
  update_token_price_history_by_pk?: Maybe<Token_Price_History>;
  /** update multiples rows of table: "token_price_history" */
  update_token_price_history_many?: Maybe<Array<Maybe<Token_Price_History_Mutation_Response>>>;
  /** update multiples rows of table: "token_price" */
  update_token_price_many?: Maybe<Array<Maybe<Token_Price_Mutation_Response>>>;
  /** update data of the table: "token_unit" */
  update_token_unit?: Maybe<Token_Unit_Mutation_Response>;
  /** update multiples rows of table: "token_unit" */
  update_token_unit_many?: Maybe<Array<Maybe<Token_Unit_Mutation_Response>>>;
  /** update data of the table: "transaction" */
  update_transaction?: Maybe<Transaction_Mutation_Response>;
  /** update multiples rows of table: "transaction" */
  update_transaction_many?: Maybe<Array<Maybe<Transaction_Mutation_Response>>>;
  /** update data of the table: "validator" */
  update_validator?: Maybe<Validator_Mutation_Response>;
  /** update single row of the table: "validator" */
  update_validator_by_pk?: Maybe<Validator>;
  /** update data of the table: "validator_commission" */
  update_validator_commission?: Maybe<Validator_Commission_Mutation_Response>;
  /** update single row of the table: "validator_commission" */
  update_validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** update multiples rows of table: "validator_commission" */
  update_validator_commission_many?: Maybe<Array<Maybe<Validator_Commission_Mutation_Response>>>;
  /** update data of the table: "validator_description" */
  update_validator_description?: Maybe<Validator_Description_Mutation_Response>;
  /** update single row of the table: "validator_description" */
  update_validator_description_by_pk?: Maybe<Validator_Description>;
  /** update multiples rows of table: "validator_description" */
  update_validator_description_many?: Maybe<Array<Maybe<Validator_Description_Mutation_Response>>>;
  /** update data of the table: "validator_info" */
  update_validator_info?: Maybe<Validator_Info_Mutation_Response>;
  /** update single row of the table: "validator_info" */
  update_validator_info_by_pk?: Maybe<Validator_Info>;
  /** update multiples rows of table: "validator_info" */
  update_validator_info_many?: Maybe<Array<Maybe<Validator_Info_Mutation_Response>>>;
  /** update multiples rows of table: "validator" */
  update_validator_many?: Maybe<Array<Maybe<Validator_Mutation_Response>>>;
  /** update data of the table: "validator_signing_info" */
  update_validator_signing_info?: Maybe<Validator_Signing_Info_Mutation_Response>;
  /** update single row of the table: "validator_signing_info" */
  update_validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** update multiples rows of table: "validator_signing_info" */
  update_validator_signing_info_many?: Maybe<Array<Maybe<Validator_Signing_Info_Mutation_Response>>>;
  /** update data of the table: "validator_status" */
  update_validator_status?: Maybe<Validator_Status_Mutation_Response>;
  /** update single row of the table: "validator_status" */
  update_validator_status_by_pk?: Maybe<Validator_Status>;
  /** update multiples rows of table: "validator_status" */
  update_validator_status_many?: Maybe<Array<Maybe<Validator_Status_Mutation_Response>>>;
  /** update data of the table: "validator_voting_power" */
  update_validator_voting_power?: Maybe<Validator_Voting_Power_Mutation_Response>;
  /** update single row of the table: "validator_voting_power" */
  update_validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** update multiples rows of table: "validator_voting_power" */
  update_validator_voting_power_many?: Maybe<Array<Maybe<Validator_Voting_Power_Mutation_Response>>>;
  /** update data of the table: "vesting_account" */
  update_vesting_account?: Maybe<Vesting_Account_Mutation_Response>;
  /** update single row of the table: "vesting_account" */
  update_vesting_account_by_pk?: Maybe<Vesting_Account>;
  /** update multiples rows of table: "vesting_account" */
  update_vesting_account_many?: Maybe<Array<Maybe<Vesting_Account_Mutation_Response>>>;
  /** update data of the table: "vesting_period" */
  update_vesting_period?: Maybe<Vesting_Period_Mutation_Response>;
  /** update multiples rows of table: "vesting_period" */
  update_vesting_period_many?: Maybe<Array<Maybe<Vesting_Period_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_From_GenesisArgs = {
  where: Average_Block_Time_From_Genesis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_From_Genesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_DayArgs = {
  where: Average_Block_Time_Per_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_HourArgs = {
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_MinuteArgs = {
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Average_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_BlockArgs = {
  where: Block_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Block_By_PkArgs = {
  height: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Community_PoolArgs = {
  where: Community_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Community_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Distribution_ParamsArgs = {
  where: Distribution_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Distribution_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Double_Sign_EvidenceArgs = {
  where: Double_Sign_Evidence_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Double_Sign_VoteArgs = {
  where: Double_Sign_Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Double_Sign_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Fee_Grant_AllowanceArgs = {
  where: Fee_Grant_Allowance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fee_Grant_Allowance_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_GenesisArgs = {
  where: Genesis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Genesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Gov_ParamsArgs = {
  where: Gov_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gov_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_InflationArgs = {
  where: Inflation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inflation_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Mint_ParamsArgs = {
  where: Mint_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Mint_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_ModulesArgs = {
  where: Modules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Modules_By_PkArgs = {
  module_name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Pre_CommitArgs = {
  where: Pre_Commit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ProposalArgs = {
  where: Proposal_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Proposal_DepositArgs = {
  where: Proposal_Deposit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Staking_Pool_SnapshotArgs = {
  where: Proposal_Staking_Pool_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Tally_ResultArgs = {
  where: Proposal_Tally_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Validator_Status_SnapshotArgs = {
  where: Proposal_Validator_Status_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Proposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Proposal_VoteArgs = {
  where: Proposal_Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slashing_ParamsArgs = {
  where: Slashing_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Slashing_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Staking_ParamsArgs = {
  where: Staking_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staking_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_Staking_PoolArgs = {
  where: Staking_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staking_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_SupplyArgs = {
  where: Supply_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Supply_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootDelete_TokenArgs = {
  where: Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_PriceArgs = {
  where: Token_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_Price_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Token_Price_HistoryArgs = {
  where: Token_Price_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Token_Price_History_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Token_UnitArgs = {
  where: Token_Unit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ValidatorArgs = {
  where: Validator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_CommissionArgs = {
  where: Validator_Commission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_DescriptionArgs = {
  where: Validator_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_InfoArgs = {
  where: Validator_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_Signing_InfoArgs = {
  where: Validator_Signing_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_StatusArgs = {
  where: Validator_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Validator_Voting_PowerArgs = {
  where: Validator_Voting_Power_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Validator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Vesting_AccountArgs = {
  where: Vesting_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vesting_Account_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Vesting_PeriodArgs = {
  where: Vesting_Period_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: Array<Account_Insert_Input>;
  on_conflict?: Maybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input;
  on_conflict?: Maybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_From_GenesisArgs = {
  objects: Array<Average_Block_Time_From_Genesis_Insert_Input>;
  on_conflict?: Maybe<Average_Block_Time_From_Genesis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_From_Genesis_OneArgs = {
  object: Average_Block_Time_From_Genesis_Insert_Input;
  on_conflict?: Maybe<Average_Block_Time_From_Genesis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_DayArgs = {
  objects: Array<Average_Block_Time_Per_Day_Insert_Input>;
  on_conflict?: Maybe<Average_Block_Time_Per_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Day_OneArgs = {
  object: Average_Block_Time_Per_Day_Insert_Input;
  on_conflict?: Maybe<Average_Block_Time_Per_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_HourArgs = {
  objects: Array<Average_Block_Time_Per_Hour_Insert_Input>;
  on_conflict?: Maybe<Average_Block_Time_Per_Hour_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Hour_OneArgs = {
  object: Average_Block_Time_Per_Hour_Insert_Input;
  on_conflict?: Maybe<Average_Block_Time_Per_Hour_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_MinuteArgs = {
  objects: Array<Average_Block_Time_Per_Minute_Insert_Input>;
  on_conflict?: Maybe<Average_Block_Time_Per_Minute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Average_Block_Time_Per_Minute_OneArgs = {
  object: Average_Block_Time_Per_Minute_Insert_Input;
  on_conflict?: Maybe<Average_Block_Time_Per_Minute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BlockArgs = {
  objects: Array<Block_Insert_Input>;
  on_conflict?: Maybe<Block_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Block_OneArgs = {
  object: Block_Insert_Input;
  on_conflict?: Maybe<Block_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Community_PoolArgs = {
  objects: Array<Community_Pool_Insert_Input>;
  on_conflict?: Maybe<Community_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Community_Pool_OneArgs = {
  object: Community_Pool_Insert_Input;
  on_conflict?: Maybe<Community_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Distribution_ParamsArgs = {
  objects: Array<Distribution_Params_Insert_Input>;
  on_conflict?: Maybe<Distribution_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Distribution_Params_OneArgs = {
  object: Distribution_Params_Insert_Input;
  on_conflict?: Maybe<Distribution_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Double_Sign_EvidenceArgs = {
  objects: Array<Double_Sign_Evidence_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Double_Sign_Evidence_OneArgs = {
  object: Double_Sign_Evidence_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Double_Sign_VoteArgs = {
  objects: Array<Double_Sign_Vote_Insert_Input>;
  on_conflict?: Maybe<Double_Sign_Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Double_Sign_Vote_OneArgs = {
  object: Double_Sign_Vote_Insert_Input;
  on_conflict?: Maybe<Double_Sign_Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fee_Grant_AllowanceArgs = {
  objects: Array<Fee_Grant_Allowance_Insert_Input>;
  on_conflict?: Maybe<Fee_Grant_Allowance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fee_Grant_Allowance_OneArgs = {
  object: Fee_Grant_Allowance_Insert_Input;
  on_conflict?: Maybe<Fee_Grant_Allowance_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GenesisArgs = {
  objects: Array<Genesis_Insert_Input>;
  on_conflict?: Maybe<Genesis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Genesis_OneArgs = {
  object: Genesis_Insert_Input;
  on_conflict?: Maybe<Genesis_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gov_ParamsArgs = {
  objects: Array<Gov_Params_Insert_Input>;
  on_conflict?: Maybe<Gov_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gov_Params_OneArgs = {
  object: Gov_Params_Insert_Input;
  on_conflict?: Maybe<Gov_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InflationArgs = {
  objects: Array<Inflation_Insert_Input>;
  on_conflict?: Maybe<Inflation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inflation_OneArgs = {
  object: Inflation_Insert_Input;
  on_conflict?: Maybe<Inflation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: Maybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: Maybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mint_ParamsArgs = {
  objects: Array<Mint_Params_Insert_Input>;
  on_conflict?: Maybe<Mint_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Mint_Params_OneArgs = {
  object: Mint_Params_Insert_Input;
  on_conflict?: Maybe<Mint_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ModulesArgs = {
  objects: Array<Modules_Insert_Input>;
  on_conflict?: Maybe<Modules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Modules_OneArgs = {
  object: Modules_Insert_Input;
  on_conflict?: Maybe<Modules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pre_CommitArgs = {
  objects: Array<Pre_Commit_Insert_Input>;
  on_conflict?: Maybe<Pre_Commit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pre_Commit_OneArgs = {
  object: Pre_Commit_Insert_Input;
  on_conflict?: Maybe<Pre_Commit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProposalArgs = {
  objects: Array<Proposal_Insert_Input>;
  on_conflict?: Maybe<Proposal_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_DepositArgs = {
  objects: Array<Proposal_Deposit_Insert_Input>;
  on_conflict?: Maybe<Proposal_Deposit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Deposit_OneArgs = {
  object: Proposal_Deposit_Insert_Input;
  on_conflict?: Maybe<Proposal_Deposit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_OneArgs = {
  object: Proposal_Insert_Input;
  on_conflict?: Maybe<Proposal_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Staking_Pool_SnapshotArgs = {
  objects: Array<Proposal_Staking_Pool_Snapshot_Insert_Input>;
  on_conflict?: Maybe<Proposal_Staking_Pool_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Staking_Pool_Snapshot_OneArgs = {
  object: Proposal_Staking_Pool_Snapshot_Insert_Input;
  on_conflict?: Maybe<Proposal_Staking_Pool_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Tally_ResultArgs = {
  objects: Array<Proposal_Tally_Result_Insert_Input>;
  on_conflict?: Maybe<Proposal_Tally_Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Tally_Result_OneArgs = {
  object: Proposal_Tally_Result_Insert_Input;
  on_conflict?: Maybe<Proposal_Tally_Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Validator_Status_SnapshotArgs = {
  objects: Array<Proposal_Validator_Status_Snapshot_Insert_Input>;
  on_conflict?: Maybe<Proposal_Validator_Status_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Validator_Status_Snapshot_OneArgs = {
  object: Proposal_Validator_Status_Snapshot_Insert_Input;
  on_conflict?: Maybe<Proposal_Validator_Status_Snapshot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_VoteArgs = {
  objects: Array<Proposal_Vote_Insert_Input>;
  on_conflict?: Maybe<Proposal_Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Proposal_Vote_OneArgs = {
  object: Proposal_Vote_Insert_Input;
  on_conflict?: Maybe<Proposal_Vote_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slashing_ParamsArgs = {
  objects: Array<Slashing_Params_Insert_Input>;
  on_conflict?: Maybe<Slashing_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Slashing_Params_OneArgs = {
  object: Slashing_Params_Insert_Input;
  on_conflict?: Maybe<Slashing_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_ParamsArgs = {
  objects: Array<Staking_Params_Insert_Input>;
  on_conflict?: Maybe<Staking_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_Params_OneArgs = {
  object: Staking_Params_Insert_Input;
  on_conflict?: Maybe<Staking_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_PoolArgs = {
  objects: Array<Staking_Pool_Insert_Input>;
  on_conflict?: Maybe<Staking_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staking_Pool_OneArgs = {
  object: Staking_Pool_Insert_Input;
  on_conflict?: Maybe<Staking_Pool_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SupplyArgs = {
  objects: Array<Supply_Insert_Input>;
  on_conflict?: Maybe<Supply_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Supply_OneArgs = {
  object: Supply_Insert_Input;
  on_conflict?: Maybe<Supply_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TokenArgs = {
  objects: Array<Token_Insert_Input>;
  on_conflict?: Maybe<Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_OneArgs = {
  object: Token_Insert_Input;
  on_conflict?: Maybe<Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_PriceArgs = {
  objects: Array<Token_Price_Insert_Input>;
  on_conflict?: Maybe<Token_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Price_HistoryArgs = {
  objects: Array<Token_Price_History_Insert_Input>;
  on_conflict?: Maybe<Token_Price_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Price_History_OneArgs = {
  object: Token_Price_History_Insert_Input;
  on_conflict?: Maybe<Token_Price_History_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Price_OneArgs = {
  object: Token_Price_Insert_Input;
  on_conflict?: Maybe<Token_Price_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_UnitArgs = {
  objects: Array<Token_Unit_Insert_Input>;
  on_conflict?: Maybe<Token_Unit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Token_Unit_OneArgs = {
  object: Token_Unit_Insert_Input;
  on_conflict?: Maybe<Token_Unit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: Array<Transaction_Insert_Input>;
  on_conflict?: Maybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: Maybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ValidatorArgs = {
  objects: Array<Validator_Insert_Input>;
  on_conflict?: Maybe<Validator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_CommissionArgs = {
  objects: Array<Validator_Commission_Insert_Input>;
  on_conflict?: Maybe<Validator_Commission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Commission_OneArgs = {
  object: Validator_Commission_Insert_Input;
  on_conflict?: Maybe<Validator_Commission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_DescriptionArgs = {
  objects: Array<Validator_Description_Insert_Input>;
  on_conflict?: Maybe<Validator_Description_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Description_OneArgs = {
  object: Validator_Description_Insert_Input;
  on_conflict?: Maybe<Validator_Description_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_InfoArgs = {
  objects: Array<Validator_Info_Insert_Input>;
  on_conflict?: Maybe<Validator_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Info_OneArgs = {
  object: Validator_Info_Insert_Input;
  on_conflict?: Maybe<Validator_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_OneArgs = {
  object: Validator_Insert_Input;
  on_conflict?: Maybe<Validator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Signing_InfoArgs = {
  objects: Array<Validator_Signing_Info_Insert_Input>;
  on_conflict?: Maybe<Validator_Signing_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Signing_Info_OneArgs = {
  object: Validator_Signing_Info_Insert_Input;
  on_conflict?: Maybe<Validator_Signing_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_StatusArgs = {
  objects: Array<Validator_Status_Insert_Input>;
  on_conflict?: Maybe<Validator_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Status_OneArgs = {
  object: Validator_Status_Insert_Input;
  on_conflict?: Maybe<Validator_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Voting_PowerArgs = {
  objects: Array<Validator_Voting_Power_Insert_Input>;
  on_conflict?: Maybe<Validator_Voting_Power_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Validator_Voting_Power_OneArgs = {
  object: Validator_Voting_Power_Insert_Input;
  on_conflict?: Maybe<Validator_Voting_Power_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vesting_AccountArgs = {
  objects: Array<Vesting_Account_Insert_Input>;
  on_conflict?: Maybe<Vesting_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vesting_Account_OneArgs = {
  object: Vesting_Account_Insert_Input;
  on_conflict?: Maybe<Vesting_Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vesting_PeriodArgs = {
  objects: Array<Vesting_Period_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Vesting_Period_OneArgs = {
  object: Vesting_Period_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _set?: Maybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _set?: Maybe<Account_Set_Input>;
  pk_columns: Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Account_ManyArgs = {
  updates: Array<Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_From_GenesisArgs = {
  _inc?: Maybe<Average_Block_Time_From_Genesis_Inc_Input>;
  _set?: Maybe<Average_Block_Time_From_Genesis_Set_Input>;
  where: Average_Block_Time_From_Genesis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_From_Genesis_By_PkArgs = {
  _inc?: Maybe<Average_Block_Time_From_Genesis_Inc_Input>;
  _set?: Maybe<Average_Block_Time_From_Genesis_Set_Input>;
  pk_columns: Average_Block_Time_From_Genesis_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_From_Genesis_ManyArgs = {
  updates: Array<Average_Block_Time_From_Genesis_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_DayArgs = {
  _inc?: Maybe<Average_Block_Time_Per_Day_Inc_Input>;
  _set?: Maybe<Average_Block_Time_Per_Day_Set_Input>;
  where: Average_Block_Time_Per_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Day_By_PkArgs = {
  _inc?: Maybe<Average_Block_Time_Per_Day_Inc_Input>;
  _set?: Maybe<Average_Block_Time_Per_Day_Set_Input>;
  pk_columns: Average_Block_Time_Per_Day_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Day_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Day_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_HourArgs = {
  _inc?: Maybe<Average_Block_Time_Per_Hour_Inc_Input>;
  _set?: Maybe<Average_Block_Time_Per_Hour_Set_Input>;
  where: Average_Block_Time_Per_Hour_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Hour_By_PkArgs = {
  _inc?: Maybe<Average_Block_Time_Per_Hour_Inc_Input>;
  _set?: Maybe<Average_Block_Time_Per_Hour_Set_Input>;
  pk_columns: Average_Block_Time_Per_Hour_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Hour_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Hour_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_MinuteArgs = {
  _inc?: Maybe<Average_Block_Time_Per_Minute_Inc_Input>;
  _set?: Maybe<Average_Block_Time_Per_Minute_Set_Input>;
  where: Average_Block_Time_Per_Minute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Minute_By_PkArgs = {
  _inc?: Maybe<Average_Block_Time_Per_Minute_Inc_Input>;
  _set?: Maybe<Average_Block_Time_Per_Minute_Set_Input>;
  pk_columns: Average_Block_Time_Per_Minute_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Average_Block_Time_Per_Minute_ManyArgs = {
  updates: Array<Average_Block_Time_Per_Minute_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BlockArgs = {
  _inc?: Maybe<Block_Inc_Input>;
  _set?: Maybe<Block_Set_Input>;
  where: Block_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Block_By_PkArgs = {
  _inc?: Maybe<Block_Inc_Input>;
  _set?: Maybe<Block_Set_Input>;
  pk_columns: Block_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Block_ManyArgs = {
  updates: Array<Block_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Community_PoolArgs = {
  _inc?: Maybe<Community_Pool_Inc_Input>;
  _set?: Maybe<Community_Pool_Set_Input>;
  where: Community_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Community_Pool_By_PkArgs = {
  _inc?: Maybe<Community_Pool_Inc_Input>;
  _set?: Maybe<Community_Pool_Set_Input>;
  pk_columns: Community_Pool_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Community_Pool_ManyArgs = {
  updates: Array<Community_Pool_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Distribution_ParamsArgs = {
  _append?: Maybe<Distribution_Params_Append_Input>;
  _delete_at_path?: Maybe<Distribution_Params_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Distribution_Params_Delete_Elem_Input>;
  _delete_key?: Maybe<Distribution_Params_Delete_Key_Input>;
  _inc?: Maybe<Distribution_Params_Inc_Input>;
  _prepend?: Maybe<Distribution_Params_Prepend_Input>;
  _set?: Maybe<Distribution_Params_Set_Input>;
  where: Distribution_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Distribution_Params_By_PkArgs = {
  _append?: Maybe<Distribution_Params_Append_Input>;
  _delete_at_path?: Maybe<Distribution_Params_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Distribution_Params_Delete_Elem_Input>;
  _delete_key?: Maybe<Distribution_Params_Delete_Key_Input>;
  _inc?: Maybe<Distribution_Params_Inc_Input>;
  _prepend?: Maybe<Distribution_Params_Prepend_Input>;
  _set?: Maybe<Distribution_Params_Set_Input>;
  pk_columns: Distribution_Params_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Distribution_Params_ManyArgs = {
  updates: Array<Distribution_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Double_Sign_EvidenceArgs = {
  _inc?: Maybe<Double_Sign_Evidence_Inc_Input>;
  _set?: Maybe<Double_Sign_Evidence_Set_Input>;
  where: Double_Sign_Evidence_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Double_Sign_Evidence_ManyArgs = {
  updates: Array<Double_Sign_Evidence_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Double_Sign_VoteArgs = {
  _inc?: Maybe<Double_Sign_Vote_Inc_Input>;
  _set?: Maybe<Double_Sign_Vote_Set_Input>;
  where: Double_Sign_Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Double_Sign_Vote_By_PkArgs = {
  _inc?: Maybe<Double_Sign_Vote_Inc_Input>;
  _set?: Maybe<Double_Sign_Vote_Set_Input>;
  pk_columns: Double_Sign_Vote_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Double_Sign_Vote_ManyArgs = {
  updates: Array<Double_Sign_Vote_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Fee_Grant_AllowanceArgs = {
  _append?: Maybe<Fee_Grant_Allowance_Append_Input>;
  _delete_at_path?: Maybe<Fee_Grant_Allowance_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Fee_Grant_Allowance_Delete_Elem_Input>;
  _delete_key?: Maybe<Fee_Grant_Allowance_Delete_Key_Input>;
  _inc?: Maybe<Fee_Grant_Allowance_Inc_Input>;
  _prepend?: Maybe<Fee_Grant_Allowance_Prepend_Input>;
  _set?: Maybe<Fee_Grant_Allowance_Set_Input>;
  where: Fee_Grant_Allowance_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fee_Grant_Allowance_By_PkArgs = {
  _append?: Maybe<Fee_Grant_Allowance_Append_Input>;
  _delete_at_path?: Maybe<Fee_Grant_Allowance_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Fee_Grant_Allowance_Delete_Elem_Input>;
  _delete_key?: Maybe<Fee_Grant_Allowance_Delete_Key_Input>;
  _inc?: Maybe<Fee_Grant_Allowance_Inc_Input>;
  _prepend?: Maybe<Fee_Grant_Allowance_Prepend_Input>;
  _set?: Maybe<Fee_Grant_Allowance_Set_Input>;
  pk_columns: Fee_Grant_Allowance_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fee_Grant_Allowance_ManyArgs = {
  updates: Array<Fee_Grant_Allowance_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GenesisArgs = {
  _inc?: Maybe<Genesis_Inc_Input>;
  _set?: Maybe<Genesis_Set_Input>;
  where: Genesis_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Genesis_By_PkArgs = {
  _inc?: Maybe<Genesis_Inc_Input>;
  _set?: Maybe<Genesis_Set_Input>;
  pk_columns: Genesis_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Genesis_ManyArgs = {
  updates: Array<Genesis_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Gov_ParamsArgs = {
  _append?: Maybe<Gov_Params_Append_Input>;
  _delete_at_path?: Maybe<Gov_Params_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Gov_Params_Delete_Elem_Input>;
  _delete_key?: Maybe<Gov_Params_Delete_Key_Input>;
  _inc?: Maybe<Gov_Params_Inc_Input>;
  _prepend?: Maybe<Gov_Params_Prepend_Input>;
  _set?: Maybe<Gov_Params_Set_Input>;
  where: Gov_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gov_Params_By_PkArgs = {
  _append?: Maybe<Gov_Params_Append_Input>;
  _delete_at_path?: Maybe<Gov_Params_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Gov_Params_Delete_Elem_Input>;
  _delete_key?: Maybe<Gov_Params_Delete_Key_Input>;
  _inc?: Maybe<Gov_Params_Inc_Input>;
  _prepend?: Maybe<Gov_Params_Prepend_Input>;
  _set?: Maybe<Gov_Params_Set_Input>;
  pk_columns: Gov_Params_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gov_Params_ManyArgs = {
  updates: Array<Gov_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_InflationArgs = {
  _inc?: Maybe<Inflation_Inc_Input>;
  _set?: Maybe<Inflation_Set_Input>;
  where: Inflation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inflation_By_PkArgs = {
  _inc?: Maybe<Inflation_Inc_Input>;
  _set?: Maybe<Inflation_Set_Input>;
  pk_columns: Inflation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Inflation_ManyArgs = {
  updates: Array<Inflation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _append?: Maybe<Message_Append_Input>;
  _delete_at_path?: Maybe<Message_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Message_Delete_Elem_Input>;
  _delete_key?: Maybe<Message_Delete_Key_Input>;
  _inc?: Maybe<Message_Inc_Input>;
  _prepend?: Maybe<Message_Prepend_Input>;
  _set?: Maybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_ManyArgs = {
  updates: Array<Message_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Mint_ParamsArgs = {
  _append?: Maybe<Mint_Params_Append_Input>;
  _delete_at_path?: Maybe<Mint_Params_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Mint_Params_Delete_Elem_Input>;
  _delete_key?: Maybe<Mint_Params_Delete_Key_Input>;
  _inc?: Maybe<Mint_Params_Inc_Input>;
  _prepend?: Maybe<Mint_Params_Prepend_Input>;
  _set?: Maybe<Mint_Params_Set_Input>;
  where: Mint_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Mint_Params_By_PkArgs = {
  _append?: Maybe<Mint_Params_Append_Input>;
  _delete_at_path?: Maybe<Mint_Params_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Mint_Params_Delete_Elem_Input>;
  _delete_key?: Maybe<Mint_Params_Delete_Key_Input>;
  _inc?: Maybe<Mint_Params_Inc_Input>;
  _prepend?: Maybe<Mint_Params_Prepend_Input>;
  _set?: Maybe<Mint_Params_Set_Input>;
  pk_columns: Mint_Params_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Mint_Params_ManyArgs = {
  updates: Array<Mint_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ModulesArgs = {
  _set?: Maybe<Modules_Set_Input>;
  where: Modules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Modules_By_PkArgs = {
  _set?: Maybe<Modules_Set_Input>;
  pk_columns: Modules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Modules_ManyArgs = {
  updates: Array<Modules_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Pre_CommitArgs = {
  _inc?: Maybe<Pre_Commit_Inc_Input>;
  _set?: Maybe<Pre_Commit_Set_Input>;
  where: Pre_Commit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pre_Commit_ManyArgs = {
  updates: Array<Pre_Commit_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProposalArgs = {
  _append?: Maybe<Proposal_Append_Input>;
  _delete_at_path?: Maybe<Proposal_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Proposal_Delete_Elem_Input>;
  _delete_key?: Maybe<Proposal_Delete_Key_Input>;
  _inc?: Maybe<Proposal_Inc_Input>;
  _prepend?: Maybe<Proposal_Prepend_Input>;
  _set?: Maybe<Proposal_Set_Input>;
  where: Proposal_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_By_PkArgs = {
  _append?: Maybe<Proposal_Append_Input>;
  _delete_at_path?: Maybe<Proposal_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Proposal_Delete_Elem_Input>;
  _delete_key?: Maybe<Proposal_Delete_Key_Input>;
  _inc?: Maybe<Proposal_Inc_Input>;
  _prepend?: Maybe<Proposal_Prepend_Input>;
  _set?: Maybe<Proposal_Set_Input>;
  pk_columns: Proposal_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_DepositArgs = {
  _inc?: Maybe<Proposal_Deposit_Inc_Input>;
  _set?: Maybe<Proposal_Deposit_Set_Input>;
  where: Proposal_Deposit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Deposit_ManyArgs = {
  updates: Array<Proposal_Deposit_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_ManyArgs = {
  updates: Array<Proposal_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Staking_Pool_SnapshotArgs = {
  _inc?: Maybe<Proposal_Staking_Pool_Snapshot_Inc_Input>;
  _set?: Maybe<Proposal_Staking_Pool_Snapshot_Set_Input>;
  where: Proposal_Staking_Pool_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Staking_Pool_Snapshot_By_PkArgs = {
  _inc?: Maybe<Proposal_Staking_Pool_Snapshot_Inc_Input>;
  _set?: Maybe<Proposal_Staking_Pool_Snapshot_Set_Input>;
  pk_columns: Proposal_Staking_Pool_Snapshot_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Staking_Pool_Snapshot_ManyArgs = {
  updates: Array<Proposal_Staking_Pool_Snapshot_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Tally_ResultArgs = {
  _inc?: Maybe<Proposal_Tally_Result_Inc_Input>;
  _set?: Maybe<Proposal_Tally_Result_Set_Input>;
  where: Proposal_Tally_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Tally_Result_By_PkArgs = {
  _inc?: Maybe<Proposal_Tally_Result_Inc_Input>;
  _set?: Maybe<Proposal_Tally_Result_Set_Input>;
  pk_columns: Proposal_Tally_Result_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Tally_Result_ManyArgs = {
  updates: Array<Proposal_Tally_Result_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_SnapshotArgs = {
  _inc?: Maybe<Proposal_Validator_Status_Snapshot_Inc_Input>;
  _set?: Maybe<Proposal_Validator_Status_Snapshot_Set_Input>;
  where: Proposal_Validator_Status_Snapshot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_Snapshot_By_PkArgs = {
  _inc?: Maybe<Proposal_Validator_Status_Snapshot_Inc_Input>;
  _set?: Maybe<Proposal_Validator_Status_Snapshot_Set_Input>;
  pk_columns: Proposal_Validator_Status_Snapshot_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Validator_Status_Snapshot_ManyArgs = {
  updates: Array<Proposal_Validator_Status_Snapshot_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_VoteArgs = {
  _inc?: Maybe<Proposal_Vote_Inc_Input>;
  _set?: Maybe<Proposal_Vote_Set_Input>;
  where: Proposal_Vote_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Proposal_Vote_ManyArgs = {
  updates: Array<Proposal_Vote_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Slashing_ParamsArgs = {
  _append?: Maybe<Slashing_Params_Append_Input>;
  _delete_at_path?: Maybe<Slashing_Params_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Slashing_Params_Delete_Elem_Input>;
  _delete_key?: Maybe<Slashing_Params_Delete_Key_Input>;
  _inc?: Maybe<Slashing_Params_Inc_Input>;
  _prepend?: Maybe<Slashing_Params_Prepend_Input>;
  _set?: Maybe<Slashing_Params_Set_Input>;
  where: Slashing_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Slashing_Params_By_PkArgs = {
  _append?: Maybe<Slashing_Params_Append_Input>;
  _delete_at_path?: Maybe<Slashing_Params_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Slashing_Params_Delete_Elem_Input>;
  _delete_key?: Maybe<Slashing_Params_Delete_Key_Input>;
  _inc?: Maybe<Slashing_Params_Inc_Input>;
  _prepend?: Maybe<Slashing_Params_Prepend_Input>;
  _set?: Maybe<Slashing_Params_Set_Input>;
  pk_columns: Slashing_Params_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Slashing_Params_ManyArgs = {
  updates: Array<Slashing_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_ParamsArgs = {
  _append?: Maybe<Staking_Params_Append_Input>;
  _delete_at_path?: Maybe<Staking_Params_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Staking_Params_Delete_Elem_Input>;
  _delete_key?: Maybe<Staking_Params_Delete_Key_Input>;
  _inc?: Maybe<Staking_Params_Inc_Input>;
  _prepend?: Maybe<Staking_Params_Prepend_Input>;
  _set?: Maybe<Staking_Params_Set_Input>;
  where: Staking_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Params_By_PkArgs = {
  _append?: Maybe<Staking_Params_Append_Input>;
  _delete_at_path?: Maybe<Staking_Params_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Staking_Params_Delete_Elem_Input>;
  _delete_key?: Maybe<Staking_Params_Delete_Key_Input>;
  _inc?: Maybe<Staking_Params_Inc_Input>;
  _prepend?: Maybe<Staking_Params_Prepend_Input>;
  _set?: Maybe<Staking_Params_Set_Input>;
  pk_columns: Staking_Params_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Params_ManyArgs = {
  updates: Array<Staking_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_PoolArgs = {
  _inc?: Maybe<Staking_Pool_Inc_Input>;
  _set?: Maybe<Staking_Pool_Set_Input>;
  where: Staking_Pool_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Pool_By_PkArgs = {
  _inc?: Maybe<Staking_Pool_Inc_Input>;
  _set?: Maybe<Staking_Pool_Set_Input>;
  pk_columns: Staking_Pool_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staking_Pool_ManyArgs = {
  updates: Array<Staking_Pool_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SupplyArgs = {
  _inc?: Maybe<Supply_Inc_Input>;
  _set?: Maybe<Supply_Set_Input>;
  where: Supply_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Supply_By_PkArgs = {
  _inc?: Maybe<Supply_Inc_Input>;
  _set?: Maybe<Supply_Set_Input>;
  pk_columns: Supply_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Supply_ManyArgs = {
  updates: Array<Supply_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TokenArgs = {
  _set?: Maybe<Token_Set_Input>;
  where: Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_ManyArgs = {
  updates: Array<Token_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Token_PriceArgs = {
  _inc?: Maybe<Token_Price_Inc_Input>;
  _set?: Maybe<Token_Price_Set_Input>;
  where: Token_Price_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Price_By_PkArgs = {
  _inc?: Maybe<Token_Price_Inc_Input>;
  _set?: Maybe<Token_Price_Set_Input>;
  pk_columns: Token_Price_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Price_HistoryArgs = {
  _inc?: Maybe<Token_Price_History_Inc_Input>;
  _set?: Maybe<Token_Price_History_Set_Input>;
  where: Token_Price_History_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Price_History_By_PkArgs = {
  _inc?: Maybe<Token_Price_History_Inc_Input>;
  _set?: Maybe<Token_Price_History_Set_Input>;
  pk_columns: Token_Price_History_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Price_History_ManyArgs = {
  updates: Array<Token_Price_History_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Price_ManyArgs = {
  updates: Array<Token_Price_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Token_UnitArgs = {
  _inc?: Maybe<Token_Unit_Inc_Input>;
  _set?: Maybe<Token_Unit_Set_Input>;
  where: Token_Unit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Token_Unit_ManyArgs = {
  updates: Array<Token_Unit_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _append?: Maybe<Transaction_Append_Input>;
  _delete_at_path?: Maybe<Transaction_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Transaction_Delete_Elem_Input>;
  _delete_key?: Maybe<Transaction_Delete_Key_Input>;
  _inc?: Maybe<Transaction_Inc_Input>;
  _prepend?: Maybe<Transaction_Prepend_Input>;
  _set?: Maybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_ManyArgs = {
  updates: Array<Transaction_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ValidatorArgs = {
  _set?: Maybe<Validator_Set_Input>;
  where: Validator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_By_PkArgs = {
  _set?: Maybe<Validator_Set_Input>;
  pk_columns: Validator_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_CommissionArgs = {
  _inc?: Maybe<Validator_Commission_Inc_Input>;
  _set?: Maybe<Validator_Commission_Set_Input>;
  where: Validator_Commission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Commission_By_PkArgs = {
  _inc?: Maybe<Validator_Commission_Inc_Input>;
  _set?: Maybe<Validator_Commission_Set_Input>;
  pk_columns: Validator_Commission_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Commission_ManyArgs = {
  updates: Array<Validator_Commission_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_DescriptionArgs = {
  _inc?: Maybe<Validator_Description_Inc_Input>;
  _set?: Maybe<Validator_Description_Set_Input>;
  where: Validator_Description_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Description_By_PkArgs = {
  _inc?: Maybe<Validator_Description_Inc_Input>;
  _set?: Maybe<Validator_Description_Set_Input>;
  pk_columns: Validator_Description_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Description_ManyArgs = {
  updates: Array<Validator_Description_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_InfoArgs = {
  _inc?: Maybe<Validator_Info_Inc_Input>;
  _set?: Maybe<Validator_Info_Set_Input>;
  where: Validator_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Info_By_PkArgs = {
  _inc?: Maybe<Validator_Info_Inc_Input>;
  _set?: Maybe<Validator_Info_Set_Input>;
  pk_columns: Validator_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Info_ManyArgs = {
  updates: Array<Validator_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_ManyArgs = {
  updates: Array<Validator_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Signing_InfoArgs = {
  _inc?: Maybe<Validator_Signing_Info_Inc_Input>;
  _set?: Maybe<Validator_Signing_Info_Set_Input>;
  where: Validator_Signing_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Signing_Info_By_PkArgs = {
  _inc?: Maybe<Validator_Signing_Info_Inc_Input>;
  _set?: Maybe<Validator_Signing_Info_Set_Input>;
  pk_columns: Validator_Signing_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Signing_Info_ManyArgs = {
  updates: Array<Validator_Signing_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_StatusArgs = {
  _inc?: Maybe<Validator_Status_Inc_Input>;
  _set?: Maybe<Validator_Status_Set_Input>;
  where: Validator_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Status_By_PkArgs = {
  _inc?: Maybe<Validator_Status_Inc_Input>;
  _set?: Maybe<Validator_Status_Set_Input>;
  pk_columns: Validator_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Status_ManyArgs = {
  updates: Array<Validator_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Voting_PowerArgs = {
  _inc?: Maybe<Validator_Voting_Power_Inc_Input>;
  _set?: Maybe<Validator_Voting_Power_Set_Input>;
  where: Validator_Voting_Power_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Voting_Power_By_PkArgs = {
  _inc?: Maybe<Validator_Voting_Power_Inc_Input>;
  _set?: Maybe<Validator_Voting_Power_Set_Input>;
  pk_columns: Validator_Voting_Power_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Validator_Voting_Power_ManyArgs = {
  updates: Array<Validator_Voting_Power_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vesting_AccountArgs = {
  _inc?: Maybe<Vesting_Account_Inc_Input>;
  _set?: Maybe<Vesting_Account_Set_Input>;
  where: Vesting_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vesting_Account_By_PkArgs = {
  _inc?: Maybe<Vesting_Account_Inc_Input>;
  _set?: Maybe<Vesting_Account_Set_Input>;
  pk_columns: Vesting_Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vesting_Account_ManyArgs = {
  updates: Array<Vesting_Account_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vesting_PeriodArgs = {
  _inc?: Maybe<Vesting_Period_Inc_Input>;
  _set?: Maybe<Vesting_Period_Set_Input>;
  where: Vesting_Period_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vesting_Period_ManyArgs = {
  updates: Array<Vesting_Period_Updates>;
};


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pre_commit" */
export type Pre_Commit = {
  __typename?: 'pre_commit';
  height: Scalars['bigint'];
  proposer_priority: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "pre_commit" */
export type Pre_Commit_Aggregate = {
  __typename?: 'pre_commit_aggregate';
  aggregate?: Maybe<Pre_Commit_Aggregate_Fields>;
  nodes: Array<Pre_Commit>;
};

export type Pre_Commit_Aggregate_Bool_Exp = {
  count?: Maybe<Pre_Commit_Aggregate_Bool_Exp_Count>;
};

export type Pre_Commit_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Pre_Commit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Pre_Commit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_Fields = {
  __typename?: 'pre_commit_aggregate_fields';
  avg?: Maybe<Pre_Commit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pre_Commit_Max_Fields>;
  min?: Maybe<Pre_Commit_Min_Fields>;
  stddev?: Maybe<Pre_Commit_Stddev_Fields>;
  stddev_pop?: Maybe<Pre_Commit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pre_Commit_Stddev_Samp_Fields>;
  sum?: Maybe<Pre_Commit_Sum_Fields>;
  var_pop?: Maybe<Pre_Commit_Var_Pop_Fields>;
  var_samp?: Maybe<Pre_Commit_Var_Samp_Fields>;
  variance?: Maybe<Pre_Commit_Variance_Fields>;
};


/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pre_Commit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pre_commit" */
export type Pre_Commit_Aggregate_Order_By = {
  avg?: Maybe<Pre_Commit_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Pre_Commit_Max_Order_By>;
  min?: Maybe<Pre_Commit_Min_Order_By>;
  stddev?: Maybe<Pre_Commit_Stddev_Order_By>;
  stddev_pop?: Maybe<Pre_Commit_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Pre_Commit_Stddev_Samp_Order_By>;
  sum?: Maybe<Pre_Commit_Sum_Order_By>;
  var_pop?: Maybe<Pre_Commit_Var_Pop_Order_By>;
  var_samp?: Maybe<Pre_Commit_Var_Samp_Order_By>;
  variance?: Maybe<Pre_Commit_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pre_commit" */
export type Pre_Commit_Arr_Rel_Insert_Input = {
  data: Array<Pre_Commit_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Pre_Commit_On_Conflict>;
};

/** aggregate avg on columns */
export type Pre_Commit_Avg_Fields = {
  __typename?: 'pre_commit_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pre_commit" */
export type Pre_Commit_Avg_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pre_commit". All fields are combined with a logical 'AND'. */
export type Pre_Commit_Bool_Exp = {
  _and?: Maybe<Array<Pre_Commit_Bool_Exp>>;
  _not?: Maybe<Pre_Commit_Bool_Exp>;
  _or?: Maybe<Array<Pre_Commit_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  proposer_priority?: Maybe<Bigint_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
  voting_power?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "pre_commit" */
export enum Pre_Commit_Constraint {
  /** unique or primary key constraint on columns "validator_address", "timestamp" */
  PreCommitValidatorAddressTimestampKey = 'pre_commit_validator_address_timestamp_key'
}

/** input type for incrementing numeric columns in table "pre_commit" */
export type Pre_Commit_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "pre_commit" */
export type Pre_Commit_Insert_Input = {
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator?: Maybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Pre_Commit_Max_Fields = {
  __typename?: 'pre_commit_max_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "pre_commit" */
export type Pre_Commit_Max_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Pre_Commit_Min_Fields = {
  __typename?: 'pre_commit_min_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "pre_commit" */
export type Pre_Commit_Min_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** response of any mutation on the table "pre_commit" */
export type Pre_Commit_Mutation_Response = {
  __typename?: 'pre_commit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pre_Commit>;
};

/** on_conflict condition type for table "pre_commit" */
export type Pre_Commit_On_Conflict = {
  constraint: Pre_Commit_Constraint;
  update_columns?: Array<Pre_Commit_Update_Column>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};

/** Ordering options when selecting data from "pre_commit". */
export type Pre_Commit_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** select columns of table "pre_commit" */
export enum Pre_Commit_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposerPriority = 'proposer_priority',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** input type for updating data in table "pre_commit" */
export type Pre_Commit_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Pre_Commit_Stddev_Fields = {
  __typename?: 'pre_commit_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pre_Commit_Stddev_Pop_Fields = {
  __typename?: 'pre_commit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pre_Commit_Stddev_Samp_Fields = {
  __typename?: 'pre_commit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** Streaming cursor of the table "pre_commit" */
export type Pre_Commit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pre_Commit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pre_Commit_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Pre_Commit_Sum_Fields = {
  __typename?: 'pre_commit_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "pre_commit" */
export type Pre_Commit_Sum_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** update columns of table "pre_commit" */
export enum Pre_Commit_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposerPriority = 'proposer_priority',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

export type Pre_Commit_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Pre_Commit_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Pre_Commit_Set_Input>;
  where: Pre_Commit_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pre_Commit_Var_Pop_Fields = {
  __typename?: 'pre_commit_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pre_commit" */
export type Pre_Commit_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pre_Commit_Var_Samp_Fields = {
  __typename?: 'pre_commit_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pre_commit" */
export type Pre_Commit_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Pre_Commit_Variance_Fields = {
  __typename?: 'pre_commit_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pre_commit" */
export type Pre_Commit_Variance_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** columns and relationships of "proposal" */
export type Proposal = {
  __typename?: 'proposal';
  content: Scalars['jsonb'];
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An aggregate relationship */
  proposal_deposits_aggregate: Proposal_Deposit_Aggregate;
  proposal_route: Scalars['String'];
  /** An object relationship */
  proposal_tally_result?: Maybe<Proposal_Tally_Result>;
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Result>;
  /** An aggregate relationship */
  proposal_tally_results_aggregate: Proposal_Tally_Result_Aggregate;
  proposal_type: Scalars['String'];
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An aggregate relationship */
  proposal_votes_aggregate: Proposal_Vote_Aggregate;
  /** An object relationship */
  proposer: Account;
  proposer_address: Scalars['String'];
  /** An object relationship */
  staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot>;
  status?: Maybe<Scalars['String']>;
  submit_time: Scalars['timestamp'];
  title: Scalars['String'];
  /** An array relationship */
  validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>;
  /** An aggregate relationship */
  validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "proposal" */
export type ProposalContentArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_DepositsArgs = {
  distinct_on?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Deposit_Order_By>>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Deposits_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Deposit_Order_By>>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_ResultsArgs = {
  distinct_on?: Maybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: Maybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_Results_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: Maybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_VotesArgs = {
  distinct_on?: Maybe<Array<Proposal_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Vote_Order_By>>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Vote_Order_By>>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalValidator_Status_SnapshotsArgs = {
  distinct_on?: Maybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalValidator_Status_Snapshots_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};

/** aggregated selection of "proposal" */
export type Proposal_Aggregate = {
  __typename?: 'proposal_aggregate';
  aggregate?: Maybe<Proposal_Aggregate_Fields>;
  nodes: Array<Proposal>;
};

export type Proposal_Aggregate_Bool_Exp = {
  count?: Maybe<Proposal_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Proposal_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Proposal_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_Fields = {
  __typename?: 'proposal_aggregate_fields';
  avg?: Maybe<Proposal_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Max_Fields>;
  min?: Maybe<Proposal_Min_Fields>;
  stddev?: Maybe<Proposal_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Sum_Fields>;
  var_pop?: Maybe<Proposal_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Variance_Fields>;
};


/** aggregate fields of "proposal" */
export type Proposal_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proposal_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal" */
export type Proposal_Aggregate_Order_By = {
  avg?: Maybe<Proposal_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Proposal_Max_Order_By>;
  min?: Maybe<Proposal_Min_Order_By>;
  stddev?: Maybe<Proposal_Stddev_Order_By>;
  stddev_pop?: Maybe<Proposal_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Proposal_Stddev_Samp_Order_By>;
  sum?: Maybe<Proposal_Sum_Order_By>;
  var_pop?: Maybe<Proposal_Var_Pop_Order_By>;
  var_samp?: Maybe<Proposal_Var_Samp_Order_By>;
  variance?: Maybe<Proposal_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Proposal_Append_Input = {
  content?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "proposal" */
export type Proposal_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Proposal_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Avg_Fields = {
  __typename?: 'proposal_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal" */
export type Proposal_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type Proposal_Bool_Exp = {
  _and?: Maybe<Array<Proposal_Bool_Exp>>;
  _not?: Maybe<Proposal_Bool_Exp>;
  _or?: Maybe<Array<Proposal_Bool_Exp>>;
  content?: Maybe<Jsonb_Comparison_Exp>;
  deposit_end_time?: Maybe<Timestamp_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  proposal_deposits?: Maybe<Proposal_Deposit_Bool_Exp>;
  proposal_deposits_aggregate?: Maybe<Proposal_Deposit_Aggregate_Bool_Exp>;
  proposal_route?: Maybe<String_Comparison_Exp>;
  proposal_tally_result?: Maybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_tally_results?: Maybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_tally_results_aggregate?: Maybe<Proposal_Tally_Result_Aggregate_Bool_Exp>;
  proposal_type?: Maybe<String_Comparison_Exp>;
  proposal_votes?: Maybe<Proposal_Vote_Bool_Exp>;
  proposal_votes_aggregate?: Maybe<Proposal_Vote_Aggregate_Bool_Exp>;
  proposer?: Maybe<Account_Bool_Exp>;
  proposer_address?: Maybe<String_Comparison_Exp>;
  staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  submit_time?: Maybe<Timestamp_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  validator_status_snapshots?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  validator_status_snapshots_aggregate?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp>;
  voting_end_time?: Maybe<Timestamp_Comparison_Exp>;
  voting_start_time?: Maybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal" */
export enum Proposal_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProposalPkey = 'proposal_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Proposal_Delete_At_Path_Input = {
  content?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Proposal_Delete_Elem_Input = {
  content?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Proposal_Delete_Key_Input = {
  content?: Maybe<Scalars['String']>;
};

/** columns and relationships of "proposal_deposit" */
export type Proposal_Deposit = {
  __typename?: 'proposal_deposit';
  amount?: Maybe<Scalars['_coin']>;
  /** An object relationship */
  block?: Maybe<Block>;
  /** An object relationship */
  depositor?: Maybe<Account>;
  depositor_address?: Maybe<Scalars['String']>;
  height: Scalars['bigint'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
};

/** aggregated selection of "proposal_deposit" */
export type Proposal_Deposit_Aggregate = {
  __typename?: 'proposal_deposit_aggregate';
  aggregate?: Maybe<Proposal_Deposit_Aggregate_Fields>;
  nodes: Array<Proposal_Deposit>;
};

export type Proposal_Deposit_Aggregate_Bool_Exp = {
  count?: Maybe<Proposal_Deposit_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Deposit_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Proposal_Deposit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Fields = {
  __typename?: 'proposal_deposit_aggregate_fields';
  avg?: Maybe<Proposal_Deposit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Deposit_Max_Fields>;
  min?: Maybe<Proposal_Deposit_Min_Fields>;
  stddev?: Maybe<Proposal_Deposit_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Deposit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Deposit_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Deposit_Sum_Fields>;
  var_pop?: Maybe<Proposal_Deposit_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Deposit_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Deposit_Variance_Fields>;
};


/** aggregate fields of "proposal_deposit" */
export type Proposal_Deposit_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Order_By = {
  avg?: Maybe<Proposal_Deposit_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Proposal_Deposit_Max_Order_By>;
  min?: Maybe<Proposal_Deposit_Min_Order_By>;
  stddev?: Maybe<Proposal_Deposit_Stddev_Order_By>;
  stddev_pop?: Maybe<Proposal_Deposit_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Proposal_Deposit_Stddev_Samp_Order_By>;
  sum?: Maybe<Proposal_Deposit_Sum_Order_By>;
  var_pop?: Maybe<Proposal_Deposit_Var_Pop_Order_By>;
  var_samp?: Maybe<Proposal_Deposit_Var_Samp_Order_By>;
  variance?: Maybe<Proposal_Deposit_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_deposit" */
export type Proposal_Deposit_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Deposit_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Proposal_Deposit_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Deposit_Avg_Fields = {
  __typename?: 'proposal_deposit_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Avg_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_deposit". All fields are combined with a logical 'AND'. */
export type Proposal_Deposit_Bool_Exp = {
  _and?: Maybe<Array<Proposal_Deposit_Bool_Exp>>;
  _not?: Maybe<Proposal_Deposit_Bool_Exp>;
  _or?: Maybe<Array<Proposal_Deposit_Bool_Exp>>;
  amount?: Maybe<_Coin_Comparison_Exp>;
  block?: Maybe<Block_Bool_Exp>;
  depositor?: Maybe<Account_Bool_Exp>;
  depositor_address?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  proposal?: Maybe<Proposal_Bool_Exp>;
  proposal_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_deposit" */
export enum Proposal_Deposit_Constraint {
  /** unique or primary key constraint on columns "proposal_id", "depositor_address" */
  UniqueDeposit = 'unique_deposit'
}

/** input type for incrementing numeric columns in table "proposal_deposit" */
export type Proposal_Deposit_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "proposal_deposit" */
export type Proposal_Deposit_Insert_Input = {
  amount?: Maybe<Scalars['_coin']>;
  block?: Maybe<Block_Obj_Rel_Insert_Input>;
  depositor?: Maybe<Account_Obj_Rel_Insert_Input>;
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  proposal?: Maybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Proposal_Deposit_Max_Fields = {
  __typename?: 'proposal_deposit_max_fields';
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Max_Order_By = {
  depositor_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Deposit_Min_Fields = {
  __typename?: 'proposal_deposit_min_fields';
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Min_Order_By = {
  depositor_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "proposal_deposit" */
export type Proposal_Deposit_Mutation_Response = {
  __typename?: 'proposal_deposit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Deposit>;
};

/** on_conflict condition type for table "proposal_deposit" */
export type Proposal_Deposit_On_Conflict = {
  constraint: Proposal_Deposit_Constraint;
  update_columns?: Array<Proposal_Deposit_Update_Column>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_deposit". */
export type Proposal_Deposit_Order_By = {
  amount?: Maybe<Order_By>;
  block?: Maybe<Block_Order_By>;
  depositor?: Maybe<Account_Order_By>;
  depositor_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  proposal?: Maybe<Proposal_Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** select columns of table "proposal_deposit" */
export enum Proposal_Deposit_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id'
}

/** input type for updating data in table "proposal_deposit" */
export type Proposal_Deposit_Set_Input = {
  amount?: Maybe<Scalars['_coin']>;
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Proposal_Deposit_Stddev_Fields = {
  __typename?: 'proposal_deposit_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Deposit_Stddev_Pop_Fields = {
  __typename?: 'proposal_deposit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Deposit_Stddev_Samp_Fields = {
  __typename?: 'proposal_deposit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** Streaming cursor of the table "proposal_deposit" */
export type Proposal_Deposit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Deposit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Deposit_Stream_Cursor_Value_Input = {
  amount?: Maybe<Scalars['_coin']>;
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Proposal_Deposit_Sum_Fields = {
  __typename?: 'proposal_deposit_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Sum_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** update columns of table "proposal_deposit" */
export enum Proposal_Deposit_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id'
}

export type Proposal_Deposit_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Proposal_Deposit_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Proposal_Deposit_Set_Input>;
  where: Proposal_Deposit_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Deposit_Var_Pop_Fields = {
  __typename?: 'proposal_deposit_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Deposit_Var_Samp_Fields = {
  __typename?: 'proposal_deposit_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Deposit_Variance_Fields = {
  __typename?: 'proposal_deposit_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Variance_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** input type for incrementing numeric columns in table "proposal" */
export type Proposal_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "proposal" */
export type Proposal_Insert_Input = {
  content?: Maybe<Scalars['jsonb']>;
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_deposits?: Maybe<Proposal_Deposit_Arr_Rel_Insert_Input>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_tally_result?: Maybe<Proposal_Tally_Result_Obj_Rel_Insert_Input>;
  proposal_tally_results?: Maybe<Proposal_Tally_Result_Arr_Rel_Insert_Input>;
  proposal_type?: Maybe<Scalars['String']>;
  proposal_votes?: Maybe<Proposal_Vote_Arr_Rel_Insert_Input>;
  proposer?: Maybe<Account_Obj_Rel_Insert_Input>;
  proposer_address?: Maybe<Scalars['String']>;
  staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Obj_Rel_Insert_Input>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  validator_status_snapshots?: Maybe<Proposal_Validator_Status_Snapshot_Arr_Rel_Insert_Input>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Proposal_Max_Fields = {
  __typename?: 'proposal_max_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "proposal" */
export type Proposal_Max_Order_By = {
  deposit_end_time?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_route?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  submit_time?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  voting_end_time?: Maybe<Order_By>;
  voting_start_time?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Min_Fields = {
  __typename?: 'proposal_min_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "proposal" */
export type Proposal_Min_Order_By = {
  deposit_end_time?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_route?: Maybe<Order_By>;
  proposal_type?: Maybe<Order_By>;
  proposer_address?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  submit_time?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  voting_end_time?: Maybe<Order_By>;
  voting_start_time?: Maybe<Order_By>;
};

/** response of any mutation on the table "proposal" */
export type Proposal_Mutation_Response = {
  __typename?: 'proposal_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal>;
};

/** input type for inserting object relation for remote table "proposal" */
export type Proposal_Obj_Rel_Insert_Input = {
  data: Proposal_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Proposal_On_Conflict>;
};

/** on_conflict condition type for table "proposal" */
export type Proposal_On_Conflict = {
  constraint: Proposal_Constraint;
  update_columns?: Array<Proposal_Update_Column>;
  where?: Maybe<Proposal_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal". */
export type Proposal_Order_By = {
  content?: Maybe<Order_By>;
  deposit_end_time?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_deposits_aggregate?: Maybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_route?: Maybe<Order_By>;
  proposal_tally_result?: Maybe<Proposal_Tally_Result_Order_By>;
  proposal_tally_results_aggregate?: Maybe<Proposal_Tally_Result_Aggregate_Order_By>;
  proposal_type?: Maybe<Order_By>;
  proposal_votes_aggregate?: Maybe<Proposal_Vote_Aggregate_Order_By>;
  proposer?: Maybe<Account_Order_By>;
  proposer_address?: Maybe<Order_By>;
  staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot_Order_By>;
  status?: Maybe<Order_By>;
  submit_time?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  validator_status_snapshots_aggregate?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  voting_end_time?: Maybe<Order_By>;
  voting_start_time?: Maybe<Order_By>;
};

/** primary key columns input for table: proposal */
export type Proposal_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Proposal_Prepend_Input = {
  content?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "proposal" */
export enum Proposal_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProposalRoute = 'proposal_route',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

/** input type for updating data in table "proposal" */
export type Proposal_Set_Input = {
  content?: Maybe<Scalars['jsonb']>;
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** columns and relationships of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot = {
  __typename?: 'proposal_staking_pool_snapshot';
  bonded_tokens: Scalars['String'];
  height: Scalars['bigint'];
  not_bonded_tokens: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
};

/** aggregated selection of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate = {
  __typename?: 'proposal_staking_pool_snapshot_aggregate';
  aggregate?: Maybe<Proposal_Staking_Pool_Snapshot_Aggregate_Fields>;
  nodes: Array<Proposal_Staking_Pool_Snapshot>;
};

/** aggregate fields of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_aggregate_fields';
  avg?: Maybe<Proposal_Staking_Pool_Snapshot_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Staking_Pool_Snapshot_Max_Fields>;
  min?: Maybe<Proposal_Staking_Pool_Snapshot_Min_Fields>;
  stddev?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Staking_Pool_Snapshot_Sum_Fields>;
  var_pop?: Maybe<Proposal_Staking_Pool_Snapshot_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Staking_Pool_Snapshot_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Staking_Pool_Snapshot_Variance_Fields>;
};


/** aggregate fields of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Proposal_Staking_Pool_Snapshot_Avg_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "proposal_staking_pool_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Staking_Pool_Snapshot_Bool_Exp = {
  _and?: Maybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  _not?: Maybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  _or?: Maybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  bonded_tokens?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: Maybe<String_Comparison_Exp>;
  proposal?: Maybe<Proposal_Bool_Exp>;
  proposal_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Constraint {
  /** unique or primary key constraint on columns "proposal_id" */
  UniqueStakingPoolSnapshot = 'unique_staking_pool_snapshot'
}

/** input type for incrementing numeric columns in table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Insert_Input = {
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  proposal?: Maybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Proposal_Staking_Pool_Snapshot_Max_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_max_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Proposal_Staking_Pool_Snapshot_Min_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_min_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Mutation_Response = {
  __typename?: 'proposal_staking_pool_snapshot_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Staking_Pool_Snapshot>;
};

/** input type for inserting object relation for remote table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Obj_Rel_Insert_Input = {
  data: Proposal_Staking_Pool_Snapshot_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Proposal_Staking_Pool_Snapshot_On_Conflict>;
};

/** on_conflict condition type for table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_On_Conflict = {
  constraint: Proposal_Staking_Pool_Snapshot_Constraint;
  update_columns?: Array<Proposal_Staking_Pool_Snapshot_Update_Column>;
  where?: Maybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_staking_pool_snapshot". */
export type Proposal_Staking_Pool_Snapshot_Order_By = {
  bonded_tokens?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  not_bonded_tokens?: Maybe<Order_By>;
  proposal?: Maybe<Proposal_Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** primary key columns input for table: proposal_staking_pool_snapshot */
export type Proposal_Staking_Pool_Snapshot_Pk_Columns_Input = {
  proposal_id: Scalars['Int'];
};

/** select columns of table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id'
}

/** input type for updating data in table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Set_Input = {
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input = {
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Proposal_Staking_Pool_Snapshot_Sum_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Update_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id'
}

export type Proposal_Staking_Pool_Snapshot_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Proposal_Staking_Pool_Snapshot_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Proposal_Staking_Pool_Snapshot_Set_Input>;
  where: Proposal_Staking_Pool_Snapshot_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Staking_Pool_Snapshot_Var_Pop_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Proposal_Staking_Pool_Snapshot_Var_Samp_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Proposal_Staking_Pool_Snapshot_Variance_Fields = {
  __typename?: 'proposal_staking_pool_snapshot_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Proposal_Stddev_Fields = {
  __typename?: 'proposal_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal" */
export type Proposal_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Stddev_Pop_Fields = {
  __typename?: 'proposal_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal" */
export type Proposal_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Stddev_Samp_Fields = {
  __typename?: 'proposal_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal" */
export type Proposal_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** Streaming cursor of the table "proposal" */
export type Proposal_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Stream_Cursor_Value_Input = {
  content?: Maybe<Scalars['jsonb']>;
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Proposal_Sum_Fields = {
  __typename?: 'proposal_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal" */
export type Proposal_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "proposal_tally_result" */
export type Proposal_Tally_Result = {
  __typename?: 'proposal_tally_result';
  abstain: Scalars['String'];
  height: Scalars['bigint'];
  no: Scalars['String'];
  no_with_veto: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
  yes: Scalars['String'];
};

/** aggregated selection of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate = {
  __typename?: 'proposal_tally_result_aggregate';
  aggregate?: Maybe<Proposal_Tally_Result_Aggregate_Fields>;
  nodes: Array<Proposal_Tally_Result>;
};

export type Proposal_Tally_Result_Aggregate_Bool_Exp = {
  count?: Maybe<Proposal_Tally_Result_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Tally_Result_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Proposal_Tally_Result_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Proposal_Tally_Result_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Fields = {
  __typename?: 'proposal_tally_result_aggregate_fields';
  avg?: Maybe<Proposal_Tally_Result_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Tally_Result_Max_Fields>;
  min?: Maybe<Proposal_Tally_Result_Min_Fields>;
  stddev?: Maybe<Proposal_Tally_Result_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Tally_Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Tally_Result_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Tally_Result_Sum_Fields>;
  var_pop?: Maybe<Proposal_Tally_Result_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Tally_Result_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Tally_Result_Variance_Fields>;
};


/** aggregate fields of "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proposal_Tally_Result_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Order_By = {
  avg?: Maybe<Proposal_Tally_Result_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Proposal_Tally_Result_Max_Order_By>;
  min?: Maybe<Proposal_Tally_Result_Min_Order_By>;
  stddev?: Maybe<Proposal_Tally_Result_Stddev_Order_By>;
  stddev_pop?: Maybe<Proposal_Tally_Result_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Proposal_Tally_Result_Stddev_Samp_Order_By>;
  sum?: Maybe<Proposal_Tally_Result_Sum_Order_By>;
  var_pop?: Maybe<Proposal_Tally_Result_Var_Pop_Order_By>;
  var_samp?: Maybe<Proposal_Tally_Result_Var_Samp_Order_By>;
  variance?: Maybe<Proposal_Tally_Result_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_tally_result" */
export type Proposal_Tally_Result_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Tally_Result_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Proposal_Tally_Result_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Tally_Result_Avg_Fields = {
  __typename?: 'proposal_tally_result_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Avg_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_tally_result". All fields are combined with a logical 'AND'. */
export type Proposal_Tally_Result_Bool_Exp = {
  _and?: Maybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  _not?: Maybe<Proposal_Tally_Result_Bool_Exp>;
  _or?: Maybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  abstain?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  no?: Maybe<String_Comparison_Exp>;
  no_with_veto?: Maybe<String_Comparison_Exp>;
  proposal?: Maybe<Proposal_Bool_Exp>;
  proposal_id?: Maybe<Int_Comparison_Exp>;
  yes?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_tally_result" */
export enum Proposal_Tally_Result_Constraint {
  /** unique or primary key constraint on columns "proposal_id" */
  UniqueTallyResult = 'unique_tally_result'
}

/** input type for incrementing numeric columns in table "proposal_tally_result" */
export type Proposal_Tally_Result_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "proposal_tally_result" */
export type Proposal_Tally_Result_Insert_Input = {
  abstain?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  no?: Maybe<Scalars['String']>;
  no_with_veto?: Maybe<Scalars['String']>;
  proposal?: Maybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: Maybe<Scalars['Int']>;
  yes?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Proposal_Tally_Result_Max_Fields = {
  __typename?: 'proposal_tally_result_max_fields';
  abstain?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  no?: Maybe<Scalars['String']>;
  no_with_veto?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  yes?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Max_Order_By = {
  abstain?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  no?: Maybe<Order_By>;
  no_with_veto?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  yes?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Tally_Result_Min_Fields = {
  __typename?: 'proposal_tally_result_min_fields';
  abstain?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  no?: Maybe<Scalars['String']>;
  no_with_veto?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  yes?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Min_Order_By = {
  abstain?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  no?: Maybe<Order_By>;
  no_with_veto?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  yes?: Maybe<Order_By>;
};

/** response of any mutation on the table "proposal_tally_result" */
export type Proposal_Tally_Result_Mutation_Response = {
  __typename?: 'proposal_tally_result_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Tally_Result>;
};

/** input type for inserting object relation for remote table "proposal_tally_result" */
export type Proposal_Tally_Result_Obj_Rel_Insert_Input = {
  data: Proposal_Tally_Result_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Proposal_Tally_Result_On_Conflict>;
};

/** on_conflict condition type for table "proposal_tally_result" */
export type Proposal_Tally_Result_On_Conflict = {
  constraint: Proposal_Tally_Result_Constraint;
  update_columns?: Array<Proposal_Tally_Result_Update_Column>;
  where?: Maybe<Proposal_Tally_Result_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_tally_result". */
export type Proposal_Tally_Result_Order_By = {
  abstain?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  no?: Maybe<Order_By>;
  no_with_veto?: Maybe<Order_By>;
  proposal?: Maybe<Proposal_Order_By>;
  proposal_id?: Maybe<Order_By>;
  yes?: Maybe<Order_By>;
};

/** primary key columns input for table: proposal_tally_result */
export type Proposal_Tally_Result_Pk_Columns_Input = {
  proposal_id: Scalars['Int'];
};

/** select columns of table "proposal_tally_result" */
export enum Proposal_Tally_Result_Select_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

/** input type for updating data in table "proposal_tally_result" */
export type Proposal_Tally_Result_Set_Input = {
  abstain?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  no?: Maybe<Scalars['String']>;
  no_with_veto?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  yes?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Proposal_Tally_Result_Stddev_Fields = {
  __typename?: 'proposal_tally_result_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Tally_Result_Stddev_Pop_Fields = {
  __typename?: 'proposal_tally_result_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Tally_Result_Stddev_Samp_Fields = {
  __typename?: 'proposal_tally_result_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** Streaming cursor of the table "proposal_tally_result" */
export type Proposal_Tally_Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Tally_Result_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Tally_Result_Stream_Cursor_Value_Input = {
  abstain?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  no?: Maybe<Scalars['String']>;
  no_with_veto?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  yes?: Maybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Proposal_Tally_Result_Sum_Fields = {
  __typename?: 'proposal_tally_result_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Sum_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** update columns of table "proposal_tally_result" */
export enum Proposal_Tally_Result_Update_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

export type Proposal_Tally_Result_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Proposal_Tally_Result_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Proposal_Tally_Result_Set_Input>;
  where: Proposal_Tally_Result_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Tally_Result_Var_Pop_Fields = {
  __typename?: 'proposal_tally_result_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Tally_Result_Var_Samp_Fields = {
  __typename?: 'proposal_tally_result_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Tally_Result_Variance_Fields = {
  __typename?: 'proposal_tally_result_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Variance_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** update columns of table "proposal" */
export enum Proposal_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProposalRoute = 'proposal_route',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

export type Proposal_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: Maybe<Proposal_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: Maybe<Proposal_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: Maybe<Proposal_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: Maybe<Proposal_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Proposal_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: Maybe<Proposal_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Proposal_Set_Input>;
  where: Proposal_Bool_Exp;
};

/** columns and relationships of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot = {
  __typename?: 'proposal_validator_status_snapshot';
  height: Scalars['bigint'];
  id: Scalars['Int'];
  jailed: Scalars['Boolean'];
  /** An object relationship */
  proposal?: Maybe<Proposal>;
  proposal_id?: Maybe<Scalars['Int']>;
  status: Scalars['Int'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate = {
  __typename?: 'proposal_validator_status_snapshot_aggregate';
  aggregate?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Fields>;
  nodes: Array<Proposal_Validator_Status_Snapshot>;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp = {
  bool_and?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or>;
  count?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And = {
  arguments: Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Fields = {
  __typename?: 'proposal_validator_status_snapshot_aggregate_fields';
  avg?: Maybe<Proposal_Validator_Status_Snapshot_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Validator_Status_Snapshot_Max_Fields>;
  min?: Maybe<Proposal_Validator_Status_Snapshot_Min_Fields>;
  stddev?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Validator_Status_Snapshot_Sum_Fields>;
  var_pop?: Maybe<Proposal_Validator_Status_Snapshot_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Validator_Status_Snapshot_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Validator_Status_Snapshot_Variance_Fields>;
};


/** aggregate fields of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Order_By = {
  avg?: Maybe<Proposal_Validator_Status_Snapshot_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Proposal_Validator_Status_Snapshot_Max_Order_By>;
  min?: Maybe<Proposal_Validator_Status_Snapshot_Min_Order_By>;
  stddev?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Order_By>;
  stddev_pop?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By>;
  sum?: Maybe<Proposal_Validator_Status_Snapshot_Sum_Order_By>;
  var_pop?: Maybe<Proposal_Validator_Status_Snapshot_Var_Pop_Order_By>;
  var_samp?: Maybe<Proposal_Validator_Status_Snapshot_Var_Samp_Order_By>;
  variance?: Maybe<Proposal_Validator_Status_Snapshot_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Validator_Status_Snapshot_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Proposal_Validator_Status_Snapshot_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Validator_Status_Snapshot_Avg_Fields = {
  __typename?: 'proposal_validator_status_snapshot_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Avg_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_validator_status_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Validator_Status_Snapshot_Bool_Exp = {
  _and?: Maybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  _not?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  _or?: Maybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  jailed?: Maybe<Boolean_Comparison_Exp>;
  proposal?: Maybe<Proposal_Bool_Exp>;
  proposal_id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<Int_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
  voting_power?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProposalValidatorStatusSnapshotPkey = 'proposal_validator_status_snapshot_pkey',
  /** unique or primary key constraint on columns "proposal_id", "validator_address" */
  UniqueValidatorStatusSnapshot = 'unique_validator_status_snapshot'
}

/** input type for incrementing numeric columns in table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Insert_Input = {
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  jailed?: Maybe<Scalars['Boolean']>;
  proposal?: Maybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  validator?: Maybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Proposal_Validator_Status_Snapshot_Max_Fields = {
  __typename?: 'proposal_validator_status_snapshot_max_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Max_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Validator_Status_Snapshot_Min_Fields = {
  __typename?: 'proposal_validator_status_snapshot_min_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Min_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** response of any mutation on the table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Mutation_Response = {
  __typename?: 'proposal_validator_status_snapshot_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Validator_Status_Snapshot>;
};

/** input type for inserting object relation for remote table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Obj_Rel_Insert_Input = {
  data: Proposal_Validator_Status_Snapshot_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Proposal_Validator_Status_Snapshot_On_Conflict>;
};

/** on_conflict condition type for table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_On_Conflict = {
  constraint: Proposal_Validator_Status_Snapshot_Constraint;
  update_columns?: Array<Proposal_Validator_Status_Snapshot_Update_Column>;
  where?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_validator_status_snapshot". */
export type Proposal_Validator_Status_Snapshot_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jailed?: Maybe<Order_By>;
  proposal?: Maybe<Proposal_Order_By>;
  proposal_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** primary key columns input for table: proposal_validator_status_snapshot */
export type Proposal_Validator_Status_Snapshot_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** select "proposal_validator_status_snapshot_aggregate_bool_exp_bool_and_arguments_columns" columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** select "proposal_validator_status_snapshot_aggregate_bool_exp_bool_or_arguments_columns" columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column_Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** input type for updating data in table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  jailed?: Maybe<Scalars['Boolean']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshot_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** Streaming cursor of the table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  jailed?: Maybe<Scalars['Boolean']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Proposal_Validator_Status_Snapshot_Sum_Fields = {
  __typename?: 'proposal_validator_status_snapshot_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Sum_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** update columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

export type Proposal_Validator_Status_Snapshot_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Proposal_Validator_Status_Snapshot_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Proposal_Validator_Status_Snapshot_Set_Input>;
  where: Proposal_Validator_Status_Snapshot_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Fields = {
  __typename?: 'proposal_validator_status_snapshot_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Fields = {
  __typename?: 'proposal_validator_status_snapshot_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Validator_Status_Snapshot_Variance_Fields = {
  __typename?: 'proposal_validator_status_snapshot_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Variance_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proposal_Var_Pop_Fields = {
  __typename?: 'proposal_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal" */
export type Proposal_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Var_Samp_Fields = {
  __typename?: 'proposal_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal" */
export type Proposal_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Variance_Fields = {
  __typename?: 'proposal_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal" */
export type Proposal_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "proposal_vote" */
export type Proposal_Vote = {
  __typename?: 'proposal_vote';
  /** An object relationship */
  account: Account;
  /** An object relationship */
  block: Block;
  height: Scalars['bigint'];
  option: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
  voter_address: Scalars['String'];
};

/** aggregated selection of "proposal_vote" */
export type Proposal_Vote_Aggregate = {
  __typename?: 'proposal_vote_aggregate';
  aggregate?: Maybe<Proposal_Vote_Aggregate_Fields>;
  nodes: Array<Proposal_Vote>;
};

export type Proposal_Vote_Aggregate_Bool_Exp = {
  count?: Maybe<Proposal_Vote_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Vote_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Proposal_Vote_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Proposal_Vote_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal_vote" */
export type Proposal_Vote_Aggregate_Fields = {
  __typename?: 'proposal_vote_aggregate_fields';
  avg?: Maybe<Proposal_Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Vote_Max_Fields>;
  min?: Maybe<Proposal_Vote_Min_Fields>;
  stddev?: Maybe<Proposal_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Vote_Sum_Fields>;
  var_pop?: Maybe<Proposal_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Vote_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Vote_Variance_Fields>;
};


/** aggregate fields of "proposal_vote" */
export type Proposal_Vote_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proposal_Vote_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal_vote" */
export type Proposal_Vote_Aggregate_Order_By = {
  avg?: Maybe<Proposal_Vote_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Proposal_Vote_Max_Order_By>;
  min?: Maybe<Proposal_Vote_Min_Order_By>;
  stddev?: Maybe<Proposal_Vote_Stddev_Order_By>;
  stddev_pop?: Maybe<Proposal_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Proposal_Vote_Stddev_Samp_Order_By>;
  sum?: Maybe<Proposal_Vote_Sum_Order_By>;
  var_pop?: Maybe<Proposal_Vote_Var_Pop_Order_By>;
  var_samp?: Maybe<Proposal_Vote_Var_Samp_Order_By>;
  variance?: Maybe<Proposal_Vote_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "proposal_vote" */
export type Proposal_Vote_Arr_Rel_Insert_Input = {
  data: Array<Proposal_Vote_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Proposal_Vote_On_Conflict>;
};

/** aggregate avg on columns */
export type Proposal_Vote_Avg_Fields = {
  __typename?: 'proposal_vote_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal_vote" */
export type Proposal_Vote_Avg_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_vote". All fields are combined with a logical 'AND'. */
export type Proposal_Vote_Bool_Exp = {
  _and?: Maybe<Array<Proposal_Vote_Bool_Exp>>;
  _not?: Maybe<Proposal_Vote_Bool_Exp>;
  _or?: Maybe<Array<Proposal_Vote_Bool_Exp>>;
  account?: Maybe<Account_Bool_Exp>;
  block?: Maybe<Block_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  option?: Maybe<String_Comparison_Exp>;
  proposal?: Maybe<Proposal_Bool_Exp>;
  proposal_id?: Maybe<Int_Comparison_Exp>;
  voter_address?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "proposal_vote" */
export enum Proposal_Vote_Constraint {
  /** unique or primary key constraint on columns "proposal_id", "voter_address" */
  UniqueVote = 'unique_vote'
}

/** input type for incrementing numeric columns in table "proposal_vote" */
export type Proposal_Vote_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "proposal_vote" */
export type Proposal_Vote_Insert_Input = {
  account?: Maybe<Account_Obj_Rel_Insert_Input>;
  block?: Maybe<Block_Obj_Rel_Insert_Input>;
  height?: Maybe<Scalars['bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal?: Maybe<Proposal_Obj_Rel_Insert_Input>;
  proposal_id?: Maybe<Scalars['Int']>;
  voter_address?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Proposal_Vote_Max_Fields = {
  __typename?: 'proposal_vote_max_fields';
  height?: Maybe<Scalars['bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  voter_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "proposal_vote" */
export type Proposal_Vote_Max_Order_By = {
  height?: Maybe<Order_By>;
  option?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  voter_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Vote_Min_Fields = {
  __typename?: 'proposal_vote_min_fields';
  height?: Maybe<Scalars['bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  voter_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "proposal_vote" */
export type Proposal_Vote_Min_Order_By = {
  height?: Maybe<Order_By>;
  option?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
  voter_address?: Maybe<Order_By>;
};

/** response of any mutation on the table "proposal_vote" */
export type Proposal_Vote_Mutation_Response = {
  __typename?: 'proposal_vote_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Proposal_Vote>;
};

/** on_conflict condition type for table "proposal_vote" */
export type Proposal_Vote_On_Conflict = {
  constraint: Proposal_Vote_Constraint;
  update_columns?: Array<Proposal_Vote_Update_Column>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};

/** Ordering options when selecting data from "proposal_vote". */
export type Proposal_Vote_Order_By = {
  account?: Maybe<Account_Order_By>;
  block?: Maybe<Block_Order_By>;
  height?: Maybe<Order_By>;
  option?: Maybe<Order_By>;
  proposal?: Maybe<Proposal_Order_By>;
  proposal_id?: Maybe<Order_By>;
  voter_address?: Maybe<Order_By>;
};

/** select columns of table "proposal_vote" */
export enum Proposal_Vote_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  VoterAddress = 'voter_address'
}

/** input type for updating data in table "proposal_vote" */
export type Proposal_Vote_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  voter_address?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Proposal_Vote_Stddev_Fields = {
  __typename?: 'proposal_vote_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Vote_Stddev_Pop_Fields = {
  __typename?: 'proposal_vote_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Vote_Stddev_Samp_Fields = {
  __typename?: 'proposal_vote_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** Streaming cursor of the table "proposal_vote" */
export type Proposal_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Vote_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  voter_address?: Maybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Proposal_Vote_Sum_Fields = {
  __typename?: 'proposal_vote_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal_vote" */
export type Proposal_Vote_Sum_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** update columns of table "proposal_vote" */
export enum Proposal_Vote_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  VoterAddress = 'voter_address'
}

export type Proposal_Vote_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Proposal_Vote_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Proposal_Vote_Set_Input>;
  where: Proposal_Vote_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Proposal_Vote_Var_Pop_Fields = {
  __typename?: 'proposal_vote_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Vote_Var_Samp_Fields = {
  __typename?: 'proposal_vote_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Vote_Variance_Fields = {
  __typename?: 'proposal_vote_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal_vote" */
export type Proposal_Vote_Variance_Order_By = {
  height?: Maybe<Order_By>;
  proposal_id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  action_account_balance?: Maybe<ActionBalance>;
  action_delegation?: Maybe<ActionDelegationResponse>;
  action_delegation_reward?: Maybe<Array<Maybe<ActionDelegationReward>>>;
  action_delegation_total?: Maybe<ActionBalance>;
  action_delegator_withdraw_address: ActionAddress;
  action_redelegation?: Maybe<ActionRedelegationResponse>;
  action_unbonding_delegation?: Maybe<ActionUnbondingDelegationResponse>;
  action_unbonding_delegation_total?: Maybe<ActionBalance>;
  action_validator_commission_amount?: Maybe<ActionValidatorCommissionAmount>;
  action_validator_delegations?: Maybe<ActionDelegationResponse>;
  action_validator_redelegations_from?: Maybe<ActionRedelegationResponse>;
  action_validator_unbonding_delegations?: Maybe<ActionUnbondingDelegationResponse>;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate;
  /** fetch data from the table: "average_block_time_from_genesis" using primary key columns */
  average_block_time_from_genesis_by_pk?: Maybe<Average_Block_Time_From_Genesis>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" using primary key columns */
  average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" using primary key columns */
  average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" using primary key columns */
  average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>;
  /** fetch aggregated fields from the table: "community_pool" */
  community_pool_aggregate: Community_Pool_Aggregate;
  /** fetch data from the table: "community_pool" using primary key columns */
  community_pool_by_pk?: Maybe<Community_Pool>;
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>;
  /** fetch aggregated fields from the table: "distribution_params" */
  distribution_params_aggregate: Distribution_Params_Aggregate;
  /** fetch data from the table: "distribution_params" using primary key columns */
  distribution_params_by_pk?: Maybe<Distribution_Params>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch aggregated fields from the table: "double_sign_evidence" */
  double_sign_evidence_aggregate: Double_Sign_Evidence_Aggregate;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch aggregated fields from the table: "double_sign_vote" */
  double_sign_vote_aggregate: Double_Sign_Vote_Aggregate;
  /** fetch data from the table: "double_sign_vote" using primary key columns */
  double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>;
  /** fetch aggregated fields from the table: "fee_grant_allowance" */
  fee_grant_allowance_aggregate: Fee_Grant_Allowance_Aggregate;
  /** fetch data from the table: "fee_grant_allowance" using primary key columns */
  fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate;
  /** fetch data from the table: "genesis" using primary key columns */
  genesis_by_pk?: Maybe<Genesis>;
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>;
  /** fetch aggregated fields from the table: "gov_params" */
  gov_params_aggregate: Gov_Params_Aggregate;
  /** fetch data from the table: "gov_params" using primary key columns */
  gov_params_by_pk?: Maybe<Gov_Params>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate;
  /** fetch data from the table: "inflation" using primary key columns */
  inflation_by_pk?: Maybe<Inflation>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_address" and query aggregates on result of table type "message" */
  messages_by_address_aggregate: Message_Aggregate;
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>;
  /** fetch aggregated fields from the table: "mint_params" */
  mint_params_aggregate: Mint_Params_Aggregate;
  /** fetch data from the table: "mint_params" using primary key columns */
  mint_params_by_pk?: Maybe<Mint_Params>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch aggregated fields from the table: "modules" */
  modules_aggregate: Modules_Aggregate;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch aggregated fields from the table: "proposal_deposit" */
  proposal_deposit_aggregate: Proposal_Deposit_Aggregate;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_aggregate: Proposal_Staking_Pool_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch aggregated fields from the table: "proposal_tally_result" */
  proposal_tally_result_aggregate: Proposal_Tally_Result_Aggregate;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_validator_status_snapshot" using primary key columns */
  proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  /** fetch aggregated fields from the table: "proposal_vote" */
  proposal_vote_aggregate: Proposal_Vote_Aggregate;
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>;
  /** fetch aggregated fields from the table: "slashing_params" */
  slashing_params_aggregate: Slashing_Params_Aggregate;
  /** fetch data from the table: "slashing_params" using primary key columns */
  slashing_params_by_pk?: Maybe<Slashing_Params>;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate;
  /** fetch data from the table: "staking_params" using primary key columns */
  staking_params_by_pk?: Maybe<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table: "staking_pool" using primary key columns */
  staking_pool_by_pk?: Maybe<Staking_Pool>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table: "supply" using primary key columns */
  supply_by_pk?: Maybe<Supply>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch aggregated fields from the table: "token_price_history" */
  token_price_history_aggregate: Token_Price_History_Aggregate;
  /** fetch data from the table: "token_price_history" using primary key columns */
  token_price_history_by_pk?: Maybe<Token_Price_History>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch aggregated fields from the table: "validator_info" */
  validator_info_aggregate: Validator_Info_Aggregate;
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>;
  /** fetch aggregated fields from the table: "validator_signing_info" */
  validator_signing_info_aggregate: Validator_Signing_Info_Aggregate;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>;
  /** fetch aggregated fields from the table: "vesting_account" */
  vesting_account_aggregate: Vesting_Account_Aggregate;
  /** fetch data from the table: "vesting_account" using primary key columns */
  vesting_account_by_pk?: Maybe<Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>;
  /** fetch aggregated fields from the table: "vesting_period" */
  vesting_period_aggregate: Vesting_Period_Aggregate;
};


export type Query_RootAccountArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootAction_Account_BalanceArgs = {
  address: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
};


export type Query_RootAction_DelegationArgs = {
  address: Scalars['String'];
  count_total?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type Query_RootAction_Delegation_RewardArgs = {
  address: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
};


export type Query_RootAction_Delegation_TotalArgs = {
  address: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
};


export type Query_RootAction_Delegator_Withdraw_AddressArgs = {
  address: Scalars['String'];
};


export type Query_RootAction_RedelegationArgs = {
  address: Scalars['String'];
  count_total?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type Query_RootAction_Unbonding_DelegationArgs = {
  address: Scalars['String'];
  count_total?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type Query_RootAction_Unbonding_Delegation_TotalArgs = {
  address: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Commission_AmountArgs = {
  address: Scalars['String'];
};


export type Query_RootAction_Validator_DelegationsArgs = {
  address: Scalars['String'];
  count_total?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Redelegations_FromArgs = {
  address: Scalars['String'];
  count_total?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Unbonding_DelegationsArgs = {
  address: Scalars['String'];
  count_total?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type Query_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_From_Genesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootBlockArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Query_RootBlock_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Query_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Query_RootCommunity_PoolArgs = {
  distinct_on?: Maybe<Array<Community_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Community_Pool_Order_By>>;
  where?: Maybe<Community_Pool_Bool_Exp>;
};


export type Query_RootCommunity_Pool_AggregateArgs = {
  distinct_on?: Maybe<Array<Community_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Community_Pool_Order_By>>;
  where?: Maybe<Community_Pool_Bool_Exp>;
};


export type Query_RootCommunity_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootDistribution_ParamsArgs = {
  distinct_on?: Maybe<Array<Distribution_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Distribution_Params_Order_By>>;
  where?: Maybe<Distribution_Params_Bool_Exp>;
};


export type Query_RootDistribution_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Distribution_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Distribution_Params_Order_By>>;
  where?: Maybe<Distribution_Params_Bool_Exp>;
};


export type Query_RootDistribution_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Query_RootDouble_Sign_Evidence_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Query_RootDouble_Sign_VoteArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


export type Query_RootDouble_Sign_Vote_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


export type Query_RootDouble_Sign_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFee_Grant_AllowanceArgs = {
  distinct_on?: Maybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: Maybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Query_RootFee_Grant_Allowance_AggregateArgs = {
  distinct_on?: Maybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: Maybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Query_RootFee_Grant_Allowance_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGenesisArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};


export type Query_RootGenesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};


export type Query_RootGenesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootGov_ParamsArgs = {
  distinct_on?: Maybe<Array<Gov_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gov_Params_Order_By>>;
  where?: Maybe<Gov_Params_Bool_Exp>;
};


export type Query_RootGov_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Gov_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gov_Params_Order_By>>;
  where?: Maybe<Gov_Params_Bool_Exp>;
};


export type Query_RootGov_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootInflationArgs = {
  distinct_on?: Maybe<Array<Inflation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inflation_Order_By>>;
  where?: Maybe<Inflation_Bool_Exp>;
};


export type Query_RootInflation_AggregateArgs = {
  distinct_on?: Maybe<Array<Inflation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inflation_Order_By>>;
  where?: Maybe<Inflation_Bool_Exp>;
};


export type Query_RootInflation_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootMessageArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_Address_AggregateArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Query_RootMint_ParamsArgs = {
  distinct_on?: Maybe<Array<Mint_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mint_Params_Order_By>>;
  where?: Maybe<Mint_Params_Bool_Exp>;
};


export type Query_RootMint_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Mint_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mint_Params_Order_By>>;
  where?: Maybe<Mint_Params_Bool_Exp>;
};


export type Query_RootMint_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootModulesArgs = {
  distinct_on?: Maybe<Array<Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Modules_Order_By>>;
  where?: Maybe<Modules_Bool_Exp>;
};


export type Query_RootModules_AggregateArgs = {
  distinct_on?: Maybe<Array<Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Modules_Order_By>>;
  where?: Maybe<Modules_Bool_Exp>;
};


export type Query_RootModules_By_PkArgs = {
  module_name: Scalars['String'];
};


export type Query_RootPre_CommitArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootPre_Commit_AggregateArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootProposalArgs = {
  distinct_on?: Maybe<Array<Proposal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Order_By>>;
  where?: Maybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Order_By>>;
  where?: Maybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProposal_DepositArgs = {
  distinct_on?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Deposit_Order_By>>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};


export type Query_RootProposal_Deposit_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Deposit_Order_By>>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: Maybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_Snapshot_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Query_RootProposal_Tally_ResultArgs = {
  distinct_on?: Maybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: Maybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Query_RootProposal_Tally_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: Maybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Query_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Query_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: Maybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_Snapshot_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProposal_VoteArgs = {
  distinct_on?: Maybe<Array<Proposal_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Vote_Order_By>>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};


export type Query_RootProposal_Vote_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Vote_Order_By>>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};


export type Query_RootSlashing_ParamsArgs = {
  distinct_on?: Maybe<Array<Slashing_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slashing_Params_Order_By>>;
  where?: Maybe<Slashing_Params_Bool_Exp>;
};


export type Query_RootSlashing_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Slashing_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slashing_Params_Order_By>>;
  where?: Maybe<Slashing_Params_Bool_Exp>;
};


export type Query_RootSlashing_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootStaking_ParamsArgs = {
  distinct_on?: Maybe<Array<Staking_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Params_Order_By>>;
  where?: Maybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Staking_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Params_Order_By>>;
  where?: Maybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootStaking_PoolArgs = {
  distinct_on?: Maybe<Array<Staking_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Pool_Order_By>>;
  where?: Maybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootStaking_Pool_AggregateArgs = {
  distinct_on?: Maybe<Array<Staking_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Pool_Order_By>>;
  where?: Maybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootStaking_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootSupplyArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};


export type Query_RootSupply_AggregateArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};


export type Query_RootSupply_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Query_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Query_RootToken_PriceArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_Price_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_Price_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootToken_Price_HistoryArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};


export type Query_RootToken_Price_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};


export type Query_RootToken_Price_History_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootToken_UnitArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Query_RootToken_Unit_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Query_RootTransactionArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Query_RootValidatorArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Query_RootValidator_CommissionArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_Commission_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_DescriptionArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_Description_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_InfoArgs = {
  distinct_on?: Maybe<Array<Validator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Info_Order_By>>;
  where?: Maybe<Validator_Info_Bool_Exp>;
};


export type Query_RootValidator_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Info_Order_By>>;
  where?: Maybe<Validator_Info_Bool_Exp>;
};


export type Query_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Query_RootValidator_Signing_InfoArgs = {
  distinct_on?: Maybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Signing_Info_Order_By>>;
  where?: Maybe<Validator_Signing_Info_Bool_Exp>;
};


export type Query_RootValidator_Signing_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Signing_Info_Order_By>>;
  where?: Maybe<Validator_Signing_Info_Bool_Exp>;
};


export type Query_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_StatusArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_Voting_PowerArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootVesting_AccountArgs = {
  distinct_on?: Maybe<Array<Vesting_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Account_Order_By>>;
  where?: Maybe<Vesting_Account_Bool_Exp>;
};


export type Query_RootVesting_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Vesting_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Account_Order_By>>;
  where?: Maybe<Vesting_Account_Bool_Exp>;
};


export type Query_RootVesting_Account_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVesting_PeriodArgs = {
  distinct_on?: Maybe<Array<Vesting_Period_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Period_Order_By>>;
  where?: Maybe<Vesting_Period_Bool_Exp>;
};


export type Query_RootVesting_Period_AggregateArgs = {
  distinct_on?: Maybe<Array<Vesting_Period_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Period_Order_By>>;
  where?: Maybe<Vesting_Period_Bool_Exp>;
};

/** columns and relationships of "slashing_params" */
export type Slashing_Params = {
  __typename?: 'slashing_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "slashing_params" */
export type Slashing_ParamsParamsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "slashing_params" */
export type Slashing_Params_Aggregate = {
  __typename?: 'slashing_params_aggregate';
  aggregate?: Maybe<Slashing_Params_Aggregate_Fields>;
  nodes: Array<Slashing_Params>;
};

/** aggregate fields of "slashing_params" */
export type Slashing_Params_Aggregate_Fields = {
  __typename?: 'slashing_params_aggregate_fields';
  avg?: Maybe<Slashing_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Slashing_Params_Max_Fields>;
  min?: Maybe<Slashing_Params_Min_Fields>;
  stddev?: Maybe<Slashing_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Slashing_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Slashing_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Slashing_Params_Sum_Fields>;
  var_pop?: Maybe<Slashing_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Slashing_Params_Var_Samp_Fields>;
  variance?: Maybe<Slashing_Params_Variance_Fields>;
};


/** aggregate fields of "slashing_params" */
export type Slashing_Params_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Slashing_Params_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Slashing_Params_Append_Input = {
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Slashing_Params_Avg_Fields = {
  __typename?: 'slashing_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "slashing_params". All fields are combined with a logical 'AND'. */
export type Slashing_Params_Bool_Exp = {
  _and?: Maybe<Array<Slashing_Params_Bool_Exp>>;
  _not?: Maybe<Slashing_Params_Bool_Exp>;
  _or?: Maybe<Array<Slashing_Params_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
  params?: Maybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "slashing_params" */
export enum Slashing_Params_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  SlashingParamsPkey = 'slashing_params_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Slashing_Params_Delete_At_Path_Input = {
  params?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Slashing_Params_Delete_Elem_Input = {
  params?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Slashing_Params_Delete_Key_Input = {
  params?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "slashing_params" */
export type Slashing_Params_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "slashing_params" */
export type Slashing_Params_Insert_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Slashing_Params_Max_Fields = {
  __typename?: 'slashing_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Slashing_Params_Min_Fields = {
  __typename?: 'slashing_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "slashing_params" */
export type Slashing_Params_Mutation_Response = {
  __typename?: 'slashing_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Slashing_Params>;
};

/** on_conflict condition type for table "slashing_params" */
export type Slashing_Params_On_Conflict = {
  constraint: Slashing_Params_Constraint;
  update_columns?: Array<Slashing_Params_Update_Column>;
  where?: Maybe<Slashing_Params_Bool_Exp>;
};

/** Ordering options when selecting data from "slashing_params". */
export type Slashing_Params_Order_By = {
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
  params?: Maybe<Order_By>;
};

/** primary key columns input for table: slashing_params */
export type Slashing_Params_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Slashing_Params_Prepend_Input = {
  params?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "slashing_params" */
export enum Slashing_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "slashing_params" */
export type Slashing_Params_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Slashing_Params_Stddev_Fields = {
  __typename?: 'slashing_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Slashing_Params_Stddev_Pop_Fields = {
  __typename?: 'slashing_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Slashing_Params_Stddev_Samp_Fields = {
  __typename?: 'slashing_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "slashing_params" */
export type Slashing_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Slashing_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Slashing_Params_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Slashing_Params_Sum_Fields = {
  __typename?: 'slashing_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "slashing_params" */
export enum Slashing_Params_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

export type Slashing_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: Maybe<Slashing_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: Maybe<Slashing_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: Maybe<Slashing_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: Maybe<Slashing_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Slashing_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: Maybe<Slashing_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Slashing_Params_Set_Input>;
  where: Slashing_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Slashing_Params_Var_Pop_Fields = {
  __typename?: 'slashing_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Slashing_Params_Var_Samp_Fields = {
  __typename?: 'slashing_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Slashing_Params_Variance_Fields = {
  __typename?: 'slashing_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

/** columns and relationships of "staking_params" */
export type Staking_Params = {
  __typename?: 'staking_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "staking_params" */
export type Staking_ParamsParamsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "staking_params" */
export type Staking_Params_Aggregate = {
  __typename?: 'staking_params_aggregate';
  aggregate?: Maybe<Staking_Params_Aggregate_Fields>;
  nodes: Array<Staking_Params>;
};

/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_Fields = {
  __typename?: 'staking_params_aggregate_fields';
  avg?: Maybe<Staking_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Staking_Params_Max_Fields>;
  min?: Maybe<Staking_Params_Min_Fields>;
  stddev?: Maybe<Staking_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Params_Sum_Fields>;
  var_pop?: Maybe<Staking_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Params_Var_Samp_Fields>;
  variance?: Maybe<Staking_Params_Variance_Fields>;
};


/** aggregate fields of "staking_params" */
export type Staking_Params_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Staking_Params_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Staking_Params_Append_Input = {
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Staking_Params_Avg_Fields = {
  __typename?: 'staking_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "staking_params". All fields are combined with a logical 'AND'. */
export type Staking_Params_Bool_Exp = {
  _and?: Maybe<Array<Staking_Params_Bool_Exp>>;
  _not?: Maybe<Staking_Params_Bool_Exp>;
  _or?: Maybe<Array<Staking_Params_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
  params?: Maybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "staking_params" */
export enum Staking_Params_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  StakingParamsPkey = 'staking_params_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Staking_Params_Delete_At_Path_Input = {
  params?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Staking_Params_Delete_Elem_Input = {
  params?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Staking_Params_Delete_Key_Input = {
  params?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "staking_params" */
export type Staking_Params_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "staking_params" */
export type Staking_Params_Insert_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Staking_Params_Max_Fields = {
  __typename?: 'staking_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Staking_Params_Min_Fields = {
  __typename?: 'staking_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "staking_params" */
export type Staking_Params_Mutation_Response = {
  __typename?: 'staking_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Staking_Params>;
};

/** on_conflict condition type for table "staking_params" */
export type Staking_Params_On_Conflict = {
  constraint: Staking_Params_Constraint;
  update_columns?: Array<Staking_Params_Update_Column>;
  where?: Maybe<Staking_Params_Bool_Exp>;
};

/** Ordering options when selecting data from "staking_params". */
export type Staking_Params_Order_By = {
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
  params?: Maybe<Order_By>;
};

/** primary key columns input for table: staking_params */
export type Staking_Params_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Staking_Params_Prepend_Input = {
  params?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "staking_params" */
export enum Staking_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** input type for updating data in table "staking_params" */
export type Staking_Params_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Staking_Params_Stddev_Fields = {
  __typename?: 'staking_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Staking_Params_Stddev_Pop_Fields = {
  __typename?: 'staking_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Staking_Params_Stddev_Samp_Fields = {
  __typename?: 'staking_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "staking_params" */
export type Staking_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Params_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
  params?: Maybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Staking_Params_Sum_Fields = {
  __typename?: 'staking_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "staking_params" */
export enum Staking_Params_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

export type Staking_Params_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: Maybe<Staking_Params_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: Maybe<Staking_Params_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: Maybe<Staking_Params_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: Maybe<Staking_Params_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Staking_Params_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: Maybe<Staking_Params_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Staking_Params_Set_Input>;
  where: Staking_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staking_Params_Var_Pop_Fields = {
  __typename?: 'staking_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Staking_Params_Var_Samp_Fields = {
  __typename?: 'staking_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Staking_Params_Variance_Fields = {
  __typename?: 'staking_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "staking_pool" */
export type Staking_Pool = {
  __typename?: 'staking_pool';
  bonded_tokens: Scalars['String'];
  height: Scalars['bigint'];
  not_bonded_tokens: Scalars['String'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "staking_pool" */
export type Staking_Pool_Aggregate = {
  __typename?: 'staking_pool_aggregate';
  aggregate?: Maybe<Staking_Pool_Aggregate_Fields>;
  nodes: Array<Staking_Pool>;
};

/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_Fields = {
  __typename?: 'staking_pool_aggregate_fields';
  avg?: Maybe<Staking_Pool_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Staking_Pool_Max_Fields>;
  min?: Maybe<Staking_Pool_Min_Fields>;
  stddev?: Maybe<Staking_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Pool_Sum_Fields>;
  var_pop?: Maybe<Staking_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Pool_Var_Samp_Fields>;
  variance?: Maybe<Staking_Pool_Variance_Fields>;
};


/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Staking_Pool_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Staking_Pool_Avg_Fields = {
  __typename?: 'staking_pool_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "staking_pool". All fields are combined with a logical 'AND'. */
export type Staking_Pool_Bool_Exp = {
  _and?: Maybe<Array<Staking_Pool_Bool_Exp>>;
  _not?: Maybe<Staking_Pool_Bool_Exp>;
  _or?: Maybe<Array<Staking_Pool_Bool_Exp>>;
  bonded_tokens?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: Maybe<String_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "staking_pool" */
export enum Staking_Pool_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  StakingPoolPkey = 'staking_pool_pkey'
}

/** input type for incrementing numeric columns in table "staking_pool" */
export type Staking_Pool_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "staking_pool" */
export type Staking_Pool_Insert_Input = {
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Staking_Pool_Max_Fields = {
  __typename?: 'staking_pool_max_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Staking_Pool_Min_Fields = {
  __typename?: 'staking_pool_min_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "staking_pool" */
export type Staking_Pool_Mutation_Response = {
  __typename?: 'staking_pool_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Staking_Pool>;
};

/** on_conflict condition type for table "staking_pool" */
export type Staking_Pool_On_Conflict = {
  constraint: Staking_Pool_Constraint;
  update_columns?: Array<Staking_Pool_Update_Column>;
  where?: Maybe<Staking_Pool_Bool_Exp>;
};

/** Ordering options when selecting data from "staking_pool". */
export type Staking_Pool_Order_By = {
  bonded_tokens?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  not_bonded_tokens?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
};

/** primary key columns input for table: staking_pool */
export type Staking_Pool_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "staking_pool" */
export enum Staking_Pool_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "staking_pool" */
export type Staking_Pool_Set_Input = {
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Staking_Pool_Stddev_Fields = {
  __typename?: 'staking_pool_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Staking_Pool_Stddev_Pop_Fields = {
  __typename?: 'staking_pool_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Staking_Pool_Stddev_Samp_Fields = {
  __typename?: 'staking_pool_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "staking_pool" */
export type Staking_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Pool_Stream_Cursor_Value_Input = {
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Staking_Pool_Sum_Fields = {
  __typename?: 'staking_pool_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "staking_pool" */
export enum Staking_Pool_Update_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Staking_Pool_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Staking_Pool_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Staking_Pool_Set_Input>;
  where: Staking_Pool_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staking_Pool_Var_Pop_Fields = {
  __typename?: 'staking_pool_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Staking_Pool_Var_Samp_Fields = {
  __typename?: 'staking_pool_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Staking_Pool_Variance_Fields = {
  __typename?: 'staking_pool_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  account_stream: Array<Account>;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate;
  /** fetch data from the table: "average_block_time_from_genesis" using primary key columns */
  average_block_time_from_genesis_by_pk?: Maybe<Average_Block_Time_From_Genesis>;
  /** fetch data from the table in a streaming manner: "average_block_time_from_genesis" */
  average_block_time_from_genesis_stream: Array<Average_Block_Time_From_Genesis>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" using primary key columns */
  average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_day" */
  average_block_time_per_day_stream: Array<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" using primary key columns */
  average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_hour" */
  average_block_time_per_hour_stream: Array<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" using primary key columns */
  average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_minute" */
  average_block_time_per_minute_stream: Array<Average_Block_Time_Per_Minute>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table in a streaming manner: "block" */
  block_stream: Array<Block>;
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>;
  /** fetch aggregated fields from the table: "community_pool" */
  community_pool_aggregate: Community_Pool_Aggregate;
  /** fetch data from the table: "community_pool" using primary key columns */
  community_pool_by_pk?: Maybe<Community_Pool>;
  /** fetch data from the table in a streaming manner: "community_pool" */
  community_pool_stream: Array<Community_Pool>;
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>;
  /** fetch aggregated fields from the table: "distribution_params" */
  distribution_params_aggregate: Distribution_Params_Aggregate;
  /** fetch data from the table: "distribution_params" using primary key columns */
  distribution_params_by_pk?: Maybe<Distribution_Params>;
  /** fetch data from the table in a streaming manner: "distribution_params" */
  distribution_params_stream: Array<Distribution_Params>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch aggregated fields from the table: "double_sign_evidence" */
  double_sign_evidence_aggregate: Double_Sign_Evidence_Aggregate;
  /** fetch data from the table in a streaming manner: "double_sign_evidence" */
  double_sign_evidence_stream: Array<Double_Sign_Evidence>;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch aggregated fields from the table: "double_sign_vote" */
  double_sign_vote_aggregate: Double_Sign_Vote_Aggregate;
  /** fetch data from the table: "double_sign_vote" using primary key columns */
  double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** fetch data from the table in a streaming manner: "double_sign_vote" */
  double_sign_vote_stream: Array<Double_Sign_Vote>;
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>;
  /** fetch aggregated fields from the table: "fee_grant_allowance" */
  fee_grant_allowance_aggregate: Fee_Grant_Allowance_Aggregate;
  /** fetch data from the table: "fee_grant_allowance" using primary key columns */
  fee_grant_allowance_by_pk?: Maybe<Fee_Grant_Allowance>;
  /** fetch data from the table in a streaming manner: "fee_grant_allowance" */
  fee_grant_allowance_stream: Array<Fee_Grant_Allowance>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate;
  /** fetch data from the table: "genesis" using primary key columns */
  genesis_by_pk?: Maybe<Genesis>;
  /** fetch data from the table in a streaming manner: "genesis" */
  genesis_stream: Array<Genesis>;
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>;
  /** fetch aggregated fields from the table: "gov_params" */
  gov_params_aggregate: Gov_Params_Aggregate;
  /** fetch data from the table: "gov_params" using primary key columns */
  gov_params_by_pk?: Maybe<Gov_Params>;
  /** fetch data from the table in a streaming manner: "gov_params" */
  gov_params_stream: Array<Gov_Params>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate;
  /** fetch data from the table: "inflation" using primary key columns */
  inflation_by_pk?: Maybe<Inflation>;
  /** fetch data from the table in a streaming manner: "inflation" */
  inflation_stream: Array<Inflation>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table in a streaming manner: "message" */
  message_stream: Array<Message>;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_address" and query aggregates on result of table type "message" */
  messages_by_address_aggregate: Message_Aggregate;
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>;
  /** fetch aggregated fields from the table: "mint_params" */
  mint_params_aggregate: Mint_Params_Aggregate;
  /** fetch data from the table: "mint_params" using primary key columns */
  mint_params_by_pk?: Maybe<Mint_Params>;
  /** fetch data from the table in a streaming manner: "mint_params" */
  mint_params_stream: Array<Mint_Params>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch aggregated fields from the table: "modules" */
  modules_aggregate: Modules_Aggregate;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table in a streaming manner: "modules" */
  modules_stream: Array<Modules>;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table in a streaming manner: "pre_commit" */
  pre_commit_stream: Array<Pre_Commit>;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch aggregated fields from the table: "proposal_deposit" */
  proposal_deposit_aggregate: Proposal_Deposit_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_deposit" */
  proposal_deposit_stream: Array<Proposal_Deposit>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_aggregate: Proposal_Staking_Pool_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_stream: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal" */
  proposal_stream: Array<Proposal>;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch aggregated fields from the table: "proposal_tally_result" */
  proposal_tally_result_aggregate: Proposal_Tally_Result_Aggregate;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** fetch data from the table in a streaming manner: "proposal_tally_result" */
  proposal_tally_result_stream: Array<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch aggregated fields from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** fetch data from the table: "proposal_validator_status_snapshot" using primary key columns */
  proposal_validator_status_snapshot_by_pk?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_stream: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  /** fetch aggregated fields from the table: "proposal_vote" */
  proposal_vote_aggregate: Proposal_Vote_Aggregate;
  /** fetch data from the table in a streaming manner: "proposal_vote" */
  proposal_vote_stream: Array<Proposal_Vote>;
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>;
  /** fetch aggregated fields from the table: "slashing_params" */
  slashing_params_aggregate: Slashing_Params_Aggregate;
  /** fetch data from the table: "slashing_params" using primary key columns */
  slashing_params_by_pk?: Maybe<Slashing_Params>;
  /** fetch data from the table in a streaming manner: "slashing_params" */
  slashing_params_stream: Array<Slashing_Params>;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch aggregated fields from the table: "staking_params" */
  staking_params_aggregate: Staking_Params_Aggregate;
  /** fetch data from the table: "staking_params" using primary key columns */
  staking_params_by_pk?: Maybe<Staking_Params>;
  /** fetch data from the table in a streaming manner: "staking_params" */
  staking_params_stream: Array<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table: "staking_pool" using primary key columns */
  staking_pool_by_pk?: Maybe<Staking_Pool>;
  /** fetch data from the table in a streaming manner: "staking_pool" */
  staking_pool_stream: Array<Staking_Pool>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table: "supply" using primary key columns */
  supply_by_pk?: Maybe<Supply>;
  /** fetch data from the table in a streaming manner: "supply" */
  supply_stream: Array<Supply>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch aggregated fields from the table: "token_price_history" */
  token_price_history_aggregate: Token_Price_History_Aggregate;
  /** fetch data from the table: "token_price_history" using primary key columns */
  token_price_history_by_pk?: Maybe<Token_Price_History>;
  /** fetch data from the table in a streaming manner: "token_price_history" */
  token_price_history_stream: Array<Token_Price_History>;
  /** fetch data from the table in a streaming manner: "token_price" */
  token_price_stream: Array<Token_Price>;
  /** fetch data from the table in a streaming manner: "token" */
  token_stream: Array<Token>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table in a streaming manner: "token_unit" */
  token_unit_stream: Array<Token_Unit>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table in a streaming manner: "transaction" */
  transaction_stream: Array<Transaction>;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table in a streaming manner: "validator_commission" */
  validator_commission_stream: Array<Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table in a streaming manner: "validator_description" */
  validator_description_stream: Array<Validator_Description>;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch aggregated fields from the table: "validator_info" */
  validator_info_aggregate: Validator_Info_Aggregate;
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>;
  /** fetch data from the table in a streaming manner: "validator_info" */
  validator_info_stream: Array<Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>;
  /** fetch aggregated fields from the table: "validator_signing_info" */
  validator_signing_info_aggregate: Validator_Signing_Info_Aggregate;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** fetch data from the table in a streaming manner: "validator_signing_info" */
  validator_signing_info_stream: Array<Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator_status" */
  validator_status_stream: Array<Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator" */
  validator_stream: Array<Validator>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** fetch data from the table in a streaming manner: "validator_voting_power" */
  validator_voting_power_stream: Array<Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>;
  /** fetch aggregated fields from the table: "vesting_account" */
  vesting_account_aggregate: Vesting_Account_Aggregate;
  /** fetch data from the table: "vesting_account" using primary key columns */
  vesting_account_by_pk?: Maybe<Vesting_Account>;
  /** fetch data from the table in a streaming manner: "vesting_account" */
  vesting_account_stream: Array<Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>;
  /** fetch aggregated fields from the table: "vesting_period" */
  vesting_period_aggregate: Vesting_Period_Aggregate;
  /** fetch data from the table in a streaming manner: "vesting_period" */
  vesting_period_stream: Array<Vesting_Period>;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Account_Stream_Cursor_Input>>;
  where?: Maybe<Account_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_Genesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootAverage_Block_Time_From_Genesis_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Average_Block_Time_From_Genesis_Stream_Cursor_Input>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootAverage_Block_Time_Per_Day_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Average_Block_Time_Per_Day_Stream_Cursor_Input>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootAverage_Block_Time_Per_Hour_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Average_Block_Time_Per_Hour_Stream_Cursor_Input>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootAverage_Block_Time_Per_Minute_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Average_Block_Time_Per_Minute_Stream_Cursor_Input>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootBlockArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Subscription_RootBlock_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Block_Stream_Cursor_Input>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Subscription_RootCommunity_PoolArgs = {
  distinct_on?: Maybe<Array<Community_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Community_Pool_Order_By>>;
  where?: Maybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootCommunity_Pool_AggregateArgs = {
  distinct_on?: Maybe<Array<Community_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Community_Pool_Order_By>>;
  where?: Maybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootCommunity_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootCommunity_Pool_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Community_Pool_Stream_Cursor_Input>>;
  where?: Maybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootDistribution_ParamsArgs = {
  distinct_on?: Maybe<Array<Distribution_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Distribution_Params_Order_By>>;
  where?: Maybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDistribution_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Distribution_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Distribution_Params_Order_By>>;
  where?: Maybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDistribution_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootDistribution_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Distribution_Params_Stream_Cursor_Input>>;
  where?: Maybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Evidence_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Evidence_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Double_Sign_Evidence_Stream_Cursor_Input>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_VoteArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Vote_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootDouble_Sign_Vote_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Double_Sign_Vote_Stream_Cursor_Input>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootFee_Grant_AllowanceArgs = {
  distinct_on?: Maybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: Maybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootFee_Grant_Allowance_AggregateArgs = {
  distinct_on?: Maybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: Maybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootFee_Grant_Allowance_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFee_Grant_Allowance_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Fee_Grant_Allowance_Stream_Cursor_Input>>;
  where?: Maybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootGenesisArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGenesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGenesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootGenesis_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Genesis_Stream_Cursor_Input>>;
  where?: Maybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGov_ParamsArgs = {
  distinct_on?: Maybe<Array<Gov_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gov_Params_Order_By>>;
  where?: Maybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Gov_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Gov_Params_Order_By>>;
  where?: Maybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootGov_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Gov_Params_Stream_Cursor_Input>>;
  where?: Maybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootInflationArgs = {
  distinct_on?: Maybe<Array<Inflation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inflation_Order_By>>;
  where?: Maybe<Inflation_Bool_Exp>;
};


export type Subscription_RootInflation_AggregateArgs = {
  distinct_on?: Maybe<Array<Inflation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inflation_Order_By>>;
  where?: Maybe<Inflation_Bool_Exp>;
};


export type Subscription_RootInflation_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootInflation_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Inflation_Stream_Cursor_Input>>;
  where?: Maybe<Inflation_Bool_Exp>;
};


export type Subscription_RootMessageArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Message_Stream_Cursor_Input>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_Address_AggregateArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: Maybe<Array<Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Message_Order_By>>;
  where?: Maybe<Message_Bool_Exp>;
};


export type Subscription_RootMint_ParamsArgs = {
  distinct_on?: Maybe<Array<Mint_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mint_Params_Order_By>>;
  where?: Maybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootMint_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Mint_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Mint_Params_Order_By>>;
  where?: Maybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootMint_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootMint_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Mint_Params_Stream_Cursor_Input>>;
  where?: Maybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootModulesArgs = {
  distinct_on?: Maybe<Array<Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Modules_Order_By>>;
  where?: Maybe<Modules_Bool_Exp>;
};


export type Subscription_RootModules_AggregateArgs = {
  distinct_on?: Maybe<Array<Modules_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Modules_Order_By>>;
  where?: Maybe<Modules_Bool_Exp>;
};


export type Subscription_RootModules_By_PkArgs = {
  module_name: Scalars['String'];
};


export type Subscription_RootModules_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Modules_Stream_Cursor_Input>>;
  where?: Maybe<Modules_Bool_Exp>;
};


export type Subscription_RootPre_CommitArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootPre_Commit_AggregateArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootPre_Commit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Pre_Commit_Stream_Cursor_Input>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootProposalArgs = {
  distinct_on?: Maybe<Array<Proposal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Order_By>>;
  where?: Maybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Order_By>>;
  where?: Maybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProposal_DepositArgs = {
  distinct_on?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Deposit_Order_By>>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Deposit_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Deposit_Order_By>>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Deposit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Proposal_Deposit_Stream_Cursor_Input>>;
  where?: Maybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: Maybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input>>;
  where?: Maybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Proposal_Stream_Cursor_Input>>;
  where?: Maybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_ResultArgs = {
  distinct_on?: Maybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: Maybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: Maybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Subscription_RootProposal_Tally_Result_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Proposal_Tally_Result_Stream_Cursor_Input>>;
  where?: Maybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: Maybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshot_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProposal_Validator_Status_Snapshot_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Proposal_Validator_Status_Snapshot_Stream_Cursor_Input>>;
  where?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_VoteArgs = {
  distinct_on?: Maybe<Array<Proposal_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Vote_Order_By>>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootProposal_Vote_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Vote_Order_By>>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootProposal_Vote_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Proposal_Vote_Stream_Cursor_Input>>;
  where?: Maybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootSlashing_ParamsArgs = {
  distinct_on?: Maybe<Array<Slashing_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slashing_Params_Order_By>>;
  where?: Maybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootSlashing_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Slashing_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Slashing_Params_Order_By>>;
  where?: Maybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootSlashing_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootSlashing_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Slashing_Params_Stream_Cursor_Input>>;
  where?: Maybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootStaking_ParamsArgs = {
  distinct_on?: Maybe<Array<Staking_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Params_Order_By>>;
  where?: Maybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Staking_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Params_Order_By>>;
  where?: Maybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootStaking_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Staking_Params_Stream_Cursor_Input>>;
  where?: Maybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_PoolArgs = {
  distinct_on?: Maybe<Array<Staking_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Pool_Order_By>>;
  where?: Maybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_AggregateArgs = {
  distinct_on?: Maybe<Array<Staking_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Pool_Order_By>>;
  where?: Maybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootStaking_Pool_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Staking_Pool_Stream_Cursor_Input>>;
  where?: Maybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootSupplyArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_AggregateArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootSupply_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Supply_Stream_Cursor_Input>>;
  where?: Maybe<Supply_Bool_Exp>;
};


export type Subscription_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_PriceArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_Price_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_Price_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootToken_Price_HistoryArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_Price_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_Price_History_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootToken_Price_History_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Token_Price_History_Stream_Cursor_Input>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_Price_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Token_Price_Stream_Cursor_Input>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Token_Stream_Cursor_Input>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_UnitArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootToken_Unit_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootToken_Unit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Token_Unit_Stream_Cursor_Input>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Transaction_Stream_Cursor_Input>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Subscription_RootValidatorArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Subscription_RootValidator_CommissionArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Commission_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Validator_Commission_Stream_Cursor_Input>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_DescriptionArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Description_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Validator_Description_Stream_Cursor_Input>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_InfoArgs = {
  distinct_on?: Maybe<Array<Validator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Info_Order_By>>;
  where?: Maybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Info_Order_By>>;
  where?: Maybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Subscription_RootValidator_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Validator_Info_Stream_Cursor_Input>>;
  where?: Maybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_InfoArgs = {
  distinct_on?: Maybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Signing_Info_Order_By>>;
  where?: Maybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Signing_Info_Order_By>>;
  where?: Maybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Signing_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Validator_Signing_Info_Stream_Cursor_Input>>;
  where?: Maybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Status_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Validator_Status_Stream_Cursor_Input>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Validator_Stream_Cursor_Input>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_PowerArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Voting_Power_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Validator_Voting_Power_Stream_Cursor_Input>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootVesting_AccountArgs = {
  distinct_on?: Maybe<Array<Vesting_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Account_Order_By>>;
  where?: Maybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Vesting_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Account_Order_By>>;
  where?: Maybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_Account_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVesting_Account_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Vesting_Account_Stream_Cursor_Input>>;
  where?: Maybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_PeriodArgs = {
  distinct_on?: Maybe<Array<Vesting_Period_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Period_Order_By>>;
  where?: Maybe<Vesting_Period_Bool_Exp>;
};


export type Subscription_RootVesting_Period_AggregateArgs = {
  distinct_on?: Maybe<Array<Vesting_Period_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Period_Order_By>>;
  where?: Maybe<Vesting_Period_Bool_Exp>;
};


export type Subscription_RootVesting_Period_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<Maybe<Vesting_Period_Stream_Cursor_Input>>;
  where?: Maybe<Vesting_Period_Bool_Exp>;
};

/** columns and relationships of "supply" */
export type Supply = {
  __typename?: 'supply';
  coins: Scalars['_coin'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "supply" */
export type Supply_Aggregate = {
  __typename?: 'supply_aggregate';
  aggregate?: Maybe<Supply_Aggregate_Fields>;
  nodes: Array<Supply>;
};

/** aggregate fields of "supply" */
export type Supply_Aggregate_Fields = {
  __typename?: 'supply_aggregate_fields';
  avg?: Maybe<Supply_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Supply_Max_Fields>;
  min?: Maybe<Supply_Min_Fields>;
  stddev?: Maybe<Supply_Stddev_Fields>;
  stddev_pop?: Maybe<Supply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supply_Stddev_Samp_Fields>;
  sum?: Maybe<Supply_Sum_Fields>;
  var_pop?: Maybe<Supply_Var_Pop_Fields>;
  var_samp?: Maybe<Supply_Var_Samp_Fields>;
  variance?: Maybe<Supply_Variance_Fields>;
};


/** aggregate fields of "supply" */
export type Supply_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Supply_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Supply_Avg_Fields = {
  __typename?: 'supply_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "supply". All fields are combined with a logical 'AND'. */
export type Supply_Bool_Exp = {
  _and?: Maybe<Array<Supply_Bool_Exp>>;
  _not?: Maybe<Supply_Bool_Exp>;
  _or?: Maybe<Array<Supply_Bool_Exp>>;
  coins?: Maybe<_Coin_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "supply" */
export enum Supply_Constraint {
  /** unique or primary key constraint on columns "one_row_id" */
  SupplyPkey = 'supply_pkey'
}

/** input type for incrementing numeric columns in table "supply" */
export type Supply_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "supply" */
export type Supply_Insert_Input = {
  coins?: Maybe<Scalars['_coin']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Supply_Max_Fields = {
  __typename?: 'supply_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Supply_Min_Fields = {
  __typename?: 'supply_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "supply" */
export type Supply_Mutation_Response = {
  __typename?: 'supply_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Supply>;
};

/** on_conflict condition type for table "supply" */
export type Supply_On_Conflict = {
  constraint: Supply_Constraint;
  update_columns?: Array<Supply_Update_Column>;
  where?: Maybe<Supply_Bool_Exp>;
};

/** Ordering options when selecting data from "supply". */
export type Supply_Order_By = {
  coins?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
};

/** primary key columns input for table: supply */
export type Supply_Pk_Columns_Input = {
  one_row_id: Scalars['Boolean'];
};

/** select columns of table "supply" */
export enum Supply_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

/** input type for updating data in table "supply" */
export type Supply_Set_Input = {
  coins?: Maybe<Scalars['_coin']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Supply_Stddev_Fields = {
  __typename?: 'supply_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Supply_Stddev_Pop_Fields = {
  __typename?: 'supply_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Supply_Stddev_Samp_Fields = {
  __typename?: 'supply_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "supply" */
export type Supply_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supply_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supply_Stream_Cursor_Value_Input = {
  coins?: Maybe<Scalars['_coin']>;
  height?: Maybe<Scalars['bigint']>;
  one_row_id?: Maybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Supply_Sum_Fields = {
  __typename?: 'supply_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** update columns of table "supply" */
export enum Supply_Update_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id'
}

export type Supply_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Supply_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Supply_Set_Input>;
  where: Supply_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Supply_Var_Pop_Fields = {
  __typename?: 'supply_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Supply_Var_Samp_Fields = {
  __typename?: 'supply_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Supply_Variance_Fields = {
  __typename?: 'supply_variance_fields';
  height?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  name: Scalars['String'];
  /** An array relationship */
  token_units: Array<Token_Unit>;
  /** An aggregate relationship */
  token_units_aggregate: Token_Unit_Aggregate;
};


/** columns and relationships of "token" */
export type TokenToken_UnitsArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenToken_Units_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: Maybe<Array<Token_Bool_Exp>>;
  _not?: Maybe<Token_Bool_Exp>;
  _or?: Maybe<Array<Token_Bool_Exp>>;
  name?: Maybe<String_Comparison_Exp>;
  token_units?: Maybe<Token_Unit_Bool_Exp>;
  token_units_aggregate?: Maybe<Token_Unit_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "token" */
export enum Token_Constraint {
  /** unique or primary key constraint on columns "name" */
  TokenNameKey = 'token_name_key'
}

/** input type for inserting data into table "token" */
export type Token_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  token_units?: Maybe<Token_Unit_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "token" */
export type Token_Mutation_Response = {
  __typename?: 'token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token>;
};

/** input type for inserting object relation for remote table "token" */
export type Token_Obj_Rel_Insert_Input = {
  data: Token_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Token_On_Conflict>;
};

/** on_conflict condition type for table "token" */
export type Token_On_Conflict = {
  constraint: Token_Constraint;
  update_columns?: Array<Token_Update_Column>;
  where?: Maybe<Token_Bool_Exp>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  name?: Maybe<Order_By>;
  token_units_aggregate?: Maybe<Token_Unit_Aggregate_Order_By>;
};

/** columns and relationships of "token_price" */
export type Token_Price = {
  __typename?: 'token_price';
  id: Scalars['Int'];
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String'];
};

/** aggregated selection of "token_price" */
export type Token_Price_Aggregate = {
  __typename?: 'token_price_aggregate';
  aggregate?: Maybe<Token_Price_Aggregate_Fields>;
  nodes: Array<Token_Price>;
};

export type Token_Price_Aggregate_Bool_Exp = {
  count?: Maybe<Token_Price_Aggregate_Bool_Exp_Count>;
};

export type Token_Price_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Token_Price_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Token_Price_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_Fields = {
  __typename?: 'token_price_aggregate_fields';
  avg?: Maybe<Token_Price_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Price_Max_Fields>;
  min?: Maybe<Token_Price_Min_Fields>;
  stddev?: Maybe<Token_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Price_Sum_Fields>;
  var_pop?: Maybe<Token_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Price_Var_Samp_Fields>;
  variance?: Maybe<Token_Price_Variance_Fields>;
};


/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Price_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_price" */
export type Token_Price_Aggregate_Order_By = {
  avg?: Maybe<Token_Price_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Token_Price_Max_Order_By>;
  min?: Maybe<Token_Price_Min_Order_By>;
  stddev?: Maybe<Token_Price_Stddev_Order_By>;
  stddev_pop?: Maybe<Token_Price_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Token_Price_Stddev_Samp_Order_By>;
  sum?: Maybe<Token_Price_Sum_Order_By>;
  var_pop?: Maybe<Token_Price_Var_Pop_Order_By>;
  var_samp?: Maybe<Token_Price_Var_Samp_Order_By>;
  variance?: Maybe<Token_Price_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "token_price" */
export type Token_Price_Arr_Rel_Insert_Input = {
  data: Array<Token_Price_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Token_Price_On_Conflict>;
};

/** aggregate avg on columns */
export type Token_Price_Avg_Fields = {
  __typename?: 'token_price_avg_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_price" */
export type Token_Price_Avg_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price". All fields are combined with a logical 'AND'. */
export type Token_Price_Bool_Exp = {
  _and?: Maybe<Array<Token_Price_Bool_Exp>>;
  _not?: Maybe<Token_Price_Bool_Exp>;
  _or?: Maybe<Array<Token_Price_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  market_cap?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  token_unit?: Maybe<Token_Unit_Bool_Exp>;
  unit_name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "token_price" */
export enum Token_Price_Constraint {
  /** unique or primary key constraint on columns "id" */
  TokenPricePkey = 'token_price_pkey',
  /** unique or primary key constraint on columns "unit_name" */
  TokenPriceUnitNameKey = 'token_price_unit_name_key'
}

/** columns and relationships of "token_price_history" */
export type Token_Price_History = {
  __typename?: 'token_price_history';
  id: Scalars['Int'];
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String'];
};

/** aggregated selection of "token_price_history" */
export type Token_Price_History_Aggregate = {
  __typename?: 'token_price_history_aggregate';
  aggregate?: Maybe<Token_Price_History_Aggregate_Fields>;
  nodes: Array<Token_Price_History>;
};

export type Token_Price_History_Aggregate_Bool_Exp = {
  count?: Maybe<Token_Price_History_Aggregate_Bool_Exp_Count>;
};

export type Token_Price_History_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Token_Price_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Token_Price_History_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "token_price_history" */
export type Token_Price_History_Aggregate_Fields = {
  __typename?: 'token_price_history_aggregate_fields';
  avg?: Maybe<Token_Price_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Price_History_Max_Fields>;
  min?: Maybe<Token_Price_History_Min_Fields>;
  stddev?: Maybe<Token_Price_History_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Price_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Price_History_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Price_History_Sum_Fields>;
  var_pop?: Maybe<Token_Price_History_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Price_History_Var_Samp_Fields>;
  variance?: Maybe<Token_Price_History_Variance_Fields>;
};


/** aggregate fields of "token_price_history" */
export type Token_Price_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Price_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_price_history" */
export type Token_Price_History_Aggregate_Order_By = {
  avg?: Maybe<Token_Price_History_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Token_Price_History_Max_Order_By>;
  min?: Maybe<Token_Price_History_Min_Order_By>;
  stddev?: Maybe<Token_Price_History_Stddev_Order_By>;
  stddev_pop?: Maybe<Token_Price_History_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Token_Price_History_Stddev_Samp_Order_By>;
  sum?: Maybe<Token_Price_History_Sum_Order_By>;
  var_pop?: Maybe<Token_Price_History_Var_Pop_Order_By>;
  var_samp?: Maybe<Token_Price_History_Var_Samp_Order_By>;
  variance?: Maybe<Token_Price_History_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "token_price_history" */
export type Token_Price_History_Arr_Rel_Insert_Input = {
  data: Array<Token_Price_History_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Token_Price_History_On_Conflict>;
};

/** aggregate avg on columns */
export type Token_Price_History_Avg_Fields = {
  __typename?: 'token_price_history_avg_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_price_history" */
export type Token_Price_History_Avg_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price_history". All fields are combined with a logical 'AND'. */
export type Token_Price_History_Bool_Exp = {
  _and?: Maybe<Array<Token_Price_History_Bool_Exp>>;
  _not?: Maybe<Token_Price_History_Bool_Exp>;
  _or?: Maybe<Array<Token_Price_History_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  market_cap?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  token_unit?: Maybe<Token_Unit_Bool_Exp>;
  unit_name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "token_price_history" */
export enum Token_Price_History_Constraint {
  /** unique or primary key constraint on columns "id" */
  TokenPriceHistoryPkey = 'token_price_history_pkey',
  /** unique or primary key constraint on columns "timestamp", "unit_name" */
  UniquePriceForTimestamp = 'unique_price_for_timestamp'
}

/** input type for incrementing numeric columns in table "token_price_history" */
export type Token_Price_History_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "token_price_history" */
export type Token_Price_History_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  token_unit?: Maybe<Token_Unit_Obj_Rel_Insert_Input>;
  unit_name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Token_Price_History_Max_Fields = {
  __typename?: 'token_price_history_max_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_price_history" */
export type Token_Price_History_Max_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Price_History_Min_Fields = {
  __typename?: 'token_price_history_min_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_price_history" */
export type Token_Price_History_Min_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** response of any mutation on the table "token_price_history" */
export type Token_Price_History_Mutation_Response = {
  __typename?: 'token_price_history_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token_Price_History>;
};

/** on_conflict condition type for table "token_price_history" */
export type Token_Price_History_On_Conflict = {
  constraint: Token_Price_History_Constraint;
  update_columns?: Array<Token_Price_History_Update_Column>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};

/** Ordering options when selecting data from "token_price_history". */
export type Token_Price_History_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  token_unit?: Maybe<Token_Unit_Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** primary key columns input for table: token_price_history */
export type Token_Price_History_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "token_price_history" */
export enum Token_Price_History_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** input type for updating data in table "token_price_history" */
export type Token_Price_History_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Token_Price_History_Stddev_Fields = {
  __typename?: 'token_price_history_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_History_Stddev_Pop_Fields = {
  __typename?: 'token_price_history_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_History_Stddev_Samp_Fields = {
  __typename?: 'token_price_history_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Streaming cursor of the table "token_price_history" */
export type Token_Price_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Price_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Price_History_Stream_Cursor_Value_Input = {
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Token_Price_History_Sum_Fields = {
  __typename?: 'token_price_history_sum_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "token_price_history" */
export type Token_Price_History_Sum_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** update columns of table "token_price_history" */
export enum Token_Price_History_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

export type Token_Price_History_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Token_Price_History_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Token_Price_History_Set_Input>;
  where: Token_Price_History_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Price_History_Var_Pop_Fields = {
  __typename?: 'token_price_history_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_price_history" */
export type Token_Price_History_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Price_History_Var_Samp_Fields = {
  __typename?: 'token_price_history_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_price_history" */
export type Token_Price_History_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Price_History_Variance_Fields = {
  __typename?: 'token_price_history_variance_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_price_history" */
export type Token_Price_History_Variance_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** input type for incrementing numeric columns in table "token_price" */
export type Token_Price_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "token_price" */
export type Token_Price_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  token_unit?: Maybe<Token_Unit_Obj_Rel_Insert_Input>;
  unit_name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Token_Price_Max_Fields = {
  __typename?: 'token_price_max_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_price" */
export type Token_Price_Max_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Price_Min_Fields = {
  __typename?: 'token_price_min_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_price" */
export type Token_Price_Min_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** response of any mutation on the table "token_price" */
export type Token_Price_Mutation_Response = {
  __typename?: 'token_price_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token_Price>;
};

/** input type for inserting object relation for remote table "token_price" */
export type Token_Price_Obj_Rel_Insert_Input = {
  data: Token_Price_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Token_Price_On_Conflict>;
};

/** on_conflict condition type for table "token_price" */
export type Token_Price_On_Conflict = {
  constraint: Token_Price_Constraint;
  update_columns?: Array<Token_Price_Update_Column>;
  where?: Maybe<Token_Price_Bool_Exp>;
};

/** Ordering options when selecting data from "token_price". */
export type Token_Price_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  token_unit?: Maybe<Token_Unit_Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** primary key columns input for table: token_price */
export type Token_Price_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "token_price" */
export enum Token_Price_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** input type for updating data in table "token_price" */
export type Token_Price_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Token_Price_Stddev_Fields = {
  __typename?: 'token_price_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_price" */
export type Token_Price_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_Stddev_Pop_Fields = {
  __typename?: 'token_price_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_price" */
export type Token_Price_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_Stddev_Samp_Fields = {
  __typename?: 'token_price_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_price" */
export type Token_Price_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Streaming cursor of the table "token_price" */
export type Token_Price_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Price_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Price_Stream_Cursor_Value_Input = {
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Token_Price_Sum_Fields = {
  __typename?: 'token_price_sum_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "token_price" */
export type Token_Price_Sum_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** update columns of table "token_price" */
export enum Token_Price_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

export type Token_Price_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Token_Price_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Token_Price_Set_Input>;
  where: Token_Price_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Price_Var_Pop_Fields = {
  __typename?: 'token_price_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_price" */
export type Token_Price_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Price_Var_Samp_Fields = {
  __typename?: 'token_price_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_price" */
export type Token_Price_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Price_Variance_Fields = {
  __typename?: 'token_price_variance_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_price" */
export type Token_Price_Variance_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "token" */
export type Token_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** Streaming cursor of the table "token" */
export type Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Stream_Cursor_Value_Input = {
  name?: Maybe<Scalars['String']>;
};

/** columns and relationships of "token_unit" */
export type Token_Unit = {
  __typename?: 'token_unit';
  aliases?: Maybe<Scalars['_text']>;
  denom: Scalars['String'];
  exponent: Scalars['Int'];
  price_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  token: Token;
  token_name: Scalars['String'];
  /** An object relationship */
  token_price?: Maybe<Token_Price>;
  /** An array relationship */
  token_price_histories: Array<Token_Price_History>;
  /** An aggregate relationship */
  token_price_histories_aggregate: Token_Price_History_Aggregate;
  /** An array relationship */
  token_prices: Array<Token_Price>;
  /** An aggregate relationship */
  token_prices_aggregate: Token_Price_Aggregate;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_HistoriesArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_Histories_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_PricesArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Prices_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};

/** aggregated selection of "token_unit" */
export type Token_Unit_Aggregate = {
  __typename?: 'token_unit_aggregate';
  aggregate?: Maybe<Token_Unit_Aggregate_Fields>;
  nodes: Array<Token_Unit>;
};

export type Token_Unit_Aggregate_Bool_Exp = {
  count?: Maybe<Token_Unit_Aggregate_Bool_Exp_Count>;
};

export type Token_Unit_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Token_Unit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Token_Unit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_Fields = {
  __typename?: 'token_unit_aggregate_fields';
  avg?: Maybe<Token_Unit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Unit_Max_Fields>;
  min?: Maybe<Token_Unit_Min_Fields>;
  stddev?: Maybe<Token_Unit_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Unit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Unit_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Unit_Sum_Fields>;
  var_pop?: Maybe<Token_Unit_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Unit_Var_Samp_Fields>;
  variance?: Maybe<Token_Unit_Variance_Fields>;
};


/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Unit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_unit" */
export type Token_Unit_Aggregate_Order_By = {
  avg?: Maybe<Token_Unit_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Token_Unit_Max_Order_By>;
  min?: Maybe<Token_Unit_Min_Order_By>;
  stddev?: Maybe<Token_Unit_Stddev_Order_By>;
  stddev_pop?: Maybe<Token_Unit_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Token_Unit_Stddev_Samp_Order_By>;
  sum?: Maybe<Token_Unit_Sum_Order_By>;
  var_pop?: Maybe<Token_Unit_Var_Pop_Order_By>;
  var_samp?: Maybe<Token_Unit_Var_Samp_Order_By>;
  variance?: Maybe<Token_Unit_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "token_unit" */
export type Token_Unit_Arr_Rel_Insert_Input = {
  data: Array<Token_Unit_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Token_Unit_On_Conflict>;
};

/** aggregate avg on columns */
export type Token_Unit_Avg_Fields = {
  __typename?: 'token_unit_avg_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_unit" */
export type Token_Unit_Avg_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_unit". All fields are combined with a logical 'AND'. */
export type Token_Unit_Bool_Exp = {
  _and?: Maybe<Array<Token_Unit_Bool_Exp>>;
  _not?: Maybe<Token_Unit_Bool_Exp>;
  _or?: Maybe<Array<Token_Unit_Bool_Exp>>;
  aliases?: Maybe<_Text_Comparison_Exp>;
  denom?: Maybe<String_Comparison_Exp>;
  exponent?: Maybe<Int_Comparison_Exp>;
  price_id?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  token_name?: Maybe<String_Comparison_Exp>;
  token_price?: Maybe<Token_Price_Bool_Exp>;
  token_price_histories?: Maybe<Token_Price_History_Bool_Exp>;
  token_price_histories_aggregate?: Maybe<Token_Price_History_Aggregate_Bool_Exp>;
  token_prices?: Maybe<Token_Price_Bool_Exp>;
  token_prices_aggregate?: Maybe<Token_Price_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "token_unit" */
export enum Token_Unit_Constraint {
  /** unique or primary key constraint on columns "denom" */
  TokenUnitDenomKey = 'token_unit_denom_key'
}

/** input type for incrementing numeric columns in table "token_unit" */
export type Token_Unit_Inc_Input = {
  exponent?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "token_unit" */
export type Token_Unit_Insert_Input = {
  aliases?: Maybe<Scalars['_text']>;
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token?: Maybe<Token_Obj_Rel_Insert_Input>;
  token_name?: Maybe<Scalars['String']>;
  token_price?: Maybe<Token_Price_Obj_Rel_Insert_Input>;
  token_price_histories?: Maybe<Token_Price_History_Arr_Rel_Insert_Input>;
  token_prices?: Maybe<Token_Price_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Token_Unit_Max_Fields = {
  __typename?: 'token_unit_max_fields';
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_unit" */
export type Token_Unit_Max_Order_By = {
  denom?: Maybe<Order_By>;
  exponent?: Maybe<Order_By>;
  price_id?: Maybe<Order_By>;
  token_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Unit_Min_Fields = {
  __typename?: 'token_unit_min_fields';
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_unit" */
export type Token_Unit_Min_Order_By = {
  denom?: Maybe<Order_By>;
  exponent?: Maybe<Order_By>;
  price_id?: Maybe<Order_By>;
  token_name?: Maybe<Order_By>;
};

/** response of any mutation on the table "token_unit" */
export type Token_Unit_Mutation_Response = {
  __typename?: 'token_unit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Token_Unit>;
};

/** input type for inserting object relation for remote table "token_unit" */
export type Token_Unit_Obj_Rel_Insert_Input = {
  data: Token_Unit_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Token_Unit_On_Conflict>;
};

/** on_conflict condition type for table "token_unit" */
export type Token_Unit_On_Conflict = {
  constraint: Token_Unit_Constraint;
  update_columns?: Array<Token_Unit_Update_Column>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};

/** Ordering options when selecting data from "token_unit". */
export type Token_Unit_Order_By = {
  aliases?: Maybe<Order_By>;
  denom?: Maybe<Order_By>;
  exponent?: Maybe<Order_By>;
  price_id?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  token_name?: Maybe<Order_By>;
  token_price?: Maybe<Token_Price_Order_By>;
  token_price_histories_aggregate?: Maybe<Token_Price_History_Aggregate_Order_By>;
  token_prices_aggregate?: Maybe<Token_Price_Aggregate_Order_By>;
};

/** select columns of table "token_unit" */
export enum Token_Unit_Select_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  Denom = 'denom',
  /** column name */
  Exponent = 'exponent',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TokenName = 'token_name'
}

/** input type for updating data in table "token_unit" */
export type Token_Unit_Set_Input = {
  aliases?: Maybe<Scalars['_text']>;
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Token_Unit_Stddev_Fields = {
  __typename?: 'token_unit_stddev_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_unit" */
export type Token_Unit_Stddev_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Unit_Stddev_Pop_Fields = {
  __typename?: 'token_unit_stddev_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_unit" */
export type Token_Unit_Stddev_Pop_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Unit_Stddev_Samp_Fields = {
  __typename?: 'token_unit_stddev_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_unit" */
export type Token_Unit_Stddev_Samp_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** Streaming cursor of the table "token_unit" */
export type Token_Unit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Unit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Unit_Stream_Cursor_Value_Input = {
  aliases?: Maybe<Scalars['_text']>;
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Token_Unit_Sum_Fields = {
  __typename?: 'token_unit_sum_fields';
  exponent?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "token_unit" */
export type Token_Unit_Sum_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** update columns of table "token_unit" */
export enum Token_Unit_Update_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  Denom = 'denom',
  /** column name */
  Exponent = 'exponent',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TokenName = 'token_name'
}

export type Token_Unit_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Token_Unit_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Token_Unit_Set_Input>;
  where: Token_Unit_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Token_Unit_Var_Pop_Fields = {
  __typename?: 'token_unit_var_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_unit" */
export type Token_Unit_Var_Pop_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Unit_Var_Samp_Fields = {
  __typename?: 'token_unit_var_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_unit" */
export type Token_Unit_Var_Samp_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Unit_Variance_Fields = {
  __typename?: 'token_unit_variance_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_unit" */
export type Token_Unit_Variance_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** update columns of table "token" */
export enum Token_Update_Column {
  /** column name */
  Name = 'name'
}

export type Token_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Token_Set_Input>;
  where: Token_Bool_Exp;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** An object relationship */
  block: Block;
  fee: Scalars['jsonb'];
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash: Scalars['String'];
  height: Scalars['bigint'];
  logs?: Maybe<Scalars['jsonb']>;
  memo?: Maybe<Scalars['String']>;
  messages: Scalars['jsonb'];
  partition_id: Scalars['bigint'];
  raw_log?: Maybe<Scalars['String']>;
  signatures: Scalars['_text'];
  signer_infos: Scalars['jsonb'];
  success: Scalars['Boolean'];
};


/** columns and relationships of "transaction" */
export type TransactionFeeArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionLogsArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionSigner_InfosArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

export type Transaction_Aggregate_Bool_Exp = {
  bool_and?: Maybe<Transaction_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: Maybe<Transaction_Aggregate_Bool_Exp_Bool_Or>;
  count?: Maybe<Transaction_Aggregate_Bool_Exp_Count>;
};

export type Transaction_Aggregate_Bool_Exp_Bool_And = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Transaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Transaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: Maybe<Transaction_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Transaction_Max_Order_By>;
  min?: Maybe<Transaction_Min_Order_By>;
  stddev?: Maybe<Transaction_Stddev_Order_By>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Order_By>;
  sum?: Maybe<Transaction_Sum_Order_By>;
  var_pop?: Maybe<Transaction_Var_Pop_Order_By>;
  var_samp?: Maybe<Transaction_Var_Samp_Order_By>;
  variance?: Maybe<Transaction_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Transaction_Append_Input = {
  fee?: Maybe<Scalars['jsonb']>;
  logs?: Maybe<Scalars['jsonb']>;
  messages?: Maybe<Scalars['jsonb']>;
  signer_infos?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "transaction" */
export type Transaction_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  gas_used?: Maybe<Order_By>;
  gas_wanted?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: Maybe<Array<Transaction_Bool_Exp>>;
  _not?: Maybe<Transaction_Bool_Exp>;
  _or?: Maybe<Array<Transaction_Bool_Exp>>;
  block?: Maybe<Block_Bool_Exp>;
  fee?: Maybe<Jsonb_Comparison_Exp>;
  gas_used?: Maybe<Bigint_Comparison_Exp>;
  gas_wanted?: Maybe<Bigint_Comparison_Exp>;
  hash?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  logs?: Maybe<Jsonb_Comparison_Exp>;
  memo?: Maybe<String_Comparison_Exp>;
  messages?: Maybe<Jsonb_Comparison_Exp>;
  partition_id?: Maybe<Bigint_Comparison_Exp>;
  raw_log?: Maybe<String_Comparison_Exp>;
  signatures?: Maybe<_Text_Comparison_Exp>;
  signer_infos?: Maybe<Jsonb_Comparison_Exp>;
  success?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction" */
export enum Transaction_Constraint {
  /** unique or primary key constraint on columns "hash", "partition_id" */
  UniqueTx = 'unique_tx'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Transaction_Delete_At_Path_Input = {
  fee?: Maybe<Array<Scalars['String']>>;
  logs?: Maybe<Array<Scalars['String']>>;
  messages?: Maybe<Array<Scalars['String']>>;
  signer_infos?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Transaction_Delete_Elem_Input = {
  fee?: Maybe<Scalars['Int']>;
  logs?: Maybe<Scalars['Int']>;
  messages?: Maybe<Scalars['Int']>;
  signer_infos?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Transaction_Delete_Key_Input = {
  fee?: Maybe<Scalars['String']>;
  logs?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['String']>;
  signer_infos?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "transaction" */
export type Transaction_Inc_Input = {
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  partition_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "transaction" */
export type Transaction_Insert_Input = {
  block?: Maybe<Block_Obj_Rel_Insert_Input>;
  fee?: Maybe<Scalars['jsonb']>;
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  logs?: Maybe<Scalars['jsonb']>;
  memo?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['jsonb']>;
  partition_id?: Maybe<Scalars['bigint']>;
  raw_log?: Maybe<Scalars['String']>;
  signatures?: Maybe<Scalars['_text']>;
  signer_infos?: Maybe<Scalars['jsonb']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  memo?: Maybe<Scalars['String']>;
  partition_id?: Maybe<Scalars['bigint']>;
  raw_log?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  gas_used?: Maybe<Order_By>;
  gas_wanted?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  memo?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
  raw_log?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  memo?: Maybe<Scalars['String']>;
  partition_id?: Maybe<Scalars['bigint']>;
  raw_log?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  gas_used?: Maybe<Order_By>;
  gas_wanted?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  memo?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
  raw_log?: Maybe<Order_By>;
};

/** response of any mutation on the table "transaction" */
export type Transaction_Mutation_Response = {
  __typename?: 'transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction>;
};

/** input type for inserting object relation for remote table "transaction" */
export type Transaction_Obj_Rel_Insert_Input = {
  data: Transaction_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Transaction_On_Conflict>;
};

/** on_conflict condition type for table "transaction" */
export type Transaction_On_Conflict = {
  constraint: Transaction_Constraint;
  update_columns?: Array<Transaction_Update_Column>;
  where?: Maybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  block?: Maybe<Block_Order_By>;
  fee?: Maybe<Order_By>;
  gas_used?: Maybe<Order_By>;
  gas_wanted?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  logs?: Maybe<Order_By>;
  memo?: Maybe<Order_By>;
  messages?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
  raw_log?: Maybe<Order_By>;
  signatures?: Maybe<Order_By>;
  signer_infos?: Maybe<Order_By>;
  success?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Transaction_Prepend_Input = {
  fee?: Maybe<Scalars['jsonb']>;
  logs?: Maybe<Scalars['jsonb']>;
  messages?: Maybe<Scalars['jsonb']>;
  signer_infos?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

/** select "transaction_aggregate_bool_exp_bool_and_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** select "transaction_aggregate_bool_exp_bool_or_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Success = 'success'
}

/** input type for updating data in table "transaction" */
export type Transaction_Set_Input = {
  fee?: Maybe<Scalars['jsonb']>;
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  logs?: Maybe<Scalars['jsonb']>;
  memo?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['jsonb']>;
  partition_id?: Maybe<Scalars['bigint']>;
  raw_log?: Maybe<Scalars['String']>;
  signatures?: Maybe<Scalars['_text']>;
  signer_infos?: Maybe<Scalars['jsonb']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  gas_used?: Maybe<Order_By>;
  gas_wanted?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  gas_used?: Maybe<Order_By>;
  gas_wanted?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  gas_used?: Maybe<Order_By>;
  gas_wanted?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  fee?: Maybe<Scalars['jsonb']>;
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  logs?: Maybe<Scalars['jsonb']>;
  memo?: Maybe<Scalars['String']>;
  messages?: Maybe<Scalars['jsonb']>;
  partition_id?: Maybe<Scalars['bigint']>;
  raw_log?: Maybe<Scalars['String']>;
  signatures?: Maybe<Scalars['_text']>;
  signer_infos?: Maybe<Scalars['jsonb']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  partition_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  gas_used?: Maybe<Order_By>;
  gas_wanted?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** update columns of table "transaction" */
export enum Transaction_Update_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

export type Transaction_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: Maybe<Transaction_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: Maybe<Transaction_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: Maybe<Transaction_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: Maybe<Transaction_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Transaction_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: Maybe<Transaction_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  gas_used?: Maybe<Order_By>;
  gas_wanted?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  gas_used?: Maybe<Order_By>;
  gas_wanted?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  gas_used?: Maybe<Order_By>;
  gas_wanted?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** columns and relationships of "validator" */
export type Validator = {
  __typename?: 'validator';
  /** An array relationship */
  blocks: Array<Block>;
  /** An aggregate relationship */
  blocks_aggregate: Block_Aggregate;
  consensus_address: Scalars['String'];
  consensus_pubkey: Scalars['String'];
  /** An array relationship */
  double_sign_votes: Array<Double_Sign_Vote>;
  /** An aggregate relationship */
  double_sign_votes_aggregate: Double_Sign_Vote_Aggregate;
  /** An array relationship */
  pre_commits: Array<Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate;
  /** An object relationship */
  proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>;
  /** An aggregate relationship */
  proposal_validator_status_snapshots_aggregate: Proposal_Validator_Status_Snapshot_Aggregate;
  /** An array relationship */
  validator_commissions: Array<Validator_Commission>;
  /** An aggregate relationship */
  validator_commissions_aggregate: Validator_Commission_Aggregate;
  /** An array relationship */
  validator_descriptions: Array<Validator_Description>;
  /** An aggregate relationship */
  validator_descriptions_aggregate: Validator_Description_Aggregate;
  /** An object relationship */
  validator_info?: Maybe<Validator_Info>;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An aggregate relationship */
  validator_infos_aggregate: Validator_Info_Aggregate;
  /** An array relationship */
  validator_signing_infos: Array<Validator_Signing_Info>;
  /** An aggregate relationship */
  validator_signing_infos_aggregate: Validator_Signing_Info_Aggregate;
  /** An array relationship */
  validator_statuses: Array<Validator_Status>;
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "validator" */
export type ValidatorBlocksArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorBlocks_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_VotesArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorPre_CommitsArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorPre_Commits_AggregateArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: Maybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorProposal_Validator_Status_Snapshots_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_CommissionsArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Commissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_DescriptionsArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Descriptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_InfosArgs = {
  distinct_on?: Maybe<Array<Validator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Info_Order_By>>;
  where?: Maybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Infos_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Info_Order_By>>;
  where?: Maybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Signing_InfosArgs = {
  distinct_on?: Maybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Signing_Info_Order_By>>;
  where?: Maybe<Validator_Signing_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Signing_Infos_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Signing_Info_Order_By>>;
  where?: Maybe<Validator_Signing_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_StatusesArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_PowersArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};

/** aggregated selection of "validator" */
export type Validator_Aggregate = {
  __typename?: 'validator_aggregate';
  aggregate?: Maybe<Validator_Aggregate_Fields>;
  nodes: Array<Validator>;
};

/** aggregate fields of "validator" */
export type Validator_Aggregate_Fields = {
  __typename?: 'validator_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Validator_Max_Fields>;
  min?: Maybe<Validator_Min_Fields>;
};


/** aggregate fields of "validator" */
export type Validator_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "validator". All fields are combined with a logical 'AND'. */
export type Validator_Bool_Exp = {
  _and?: Maybe<Array<Validator_Bool_Exp>>;
  _not?: Maybe<Validator_Bool_Exp>;
  _or?: Maybe<Array<Validator_Bool_Exp>>;
  blocks?: Maybe<Block_Bool_Exp>;
  blocks_aggregate?: Maybe<Block_Aggregate_Bool_Exp>;
  consensus_address?: Maybe<String_Comparison_Exp>;
  consensus_pubkey?: Maybe<String_Comparison_Exp>;
  double_sign_votes?: Maybe<Double_Sign_Vote_Bool_Exp>;
  double_sign_votes_aggregate?: Maybe<Double_Sign_Vote_Aggregate_Bool_Exp>;
  pre_commits?: Maybe<Pre_Commit_Bool_Exp>;
  pre_commits_aggregate?: Maybe<Pre_Commit_Aggregate_Bool_Exp>;
  proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  proposal_validator_status_snapshots?: Maybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  proposal_validator_status_snapshots_aggregate?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Bool_Exp>;
  validator_commissions?: Maybe<Validator_Commission_Bool_Exp>;
  validator_commissions_aggregate?: Maybe<Validator_Commission_Aggregate_Bool_Exp>;
  validator_descriptions?: Maybe<Validator_Description_Bool_Exp>;
  validator_descriptions_aggregate?: Maybe<Validator_Description_Aggregate_Bool_Exp>;
  validator_info?: Maybe<Validator_Info_Bool_Exp>;
  validator_infos?: Maybe<Validator_Info_Bool_Exp>;
  validator_infos_aggregate?: Maybe<Validator_Info_Aggregate_Bool_Exp>;
  validator_signing_infos?: Maybe<Validator_Signing_Info_Bool_Exp>;
  validator_signing_infos_aggregate?: Maybe<Validator_Signing_Info_Aggregate_Bool_Exp>;
  validator_statuses?: Maybe<Validator_Status_Bool_Exp>;
  validator_statuses_aggregate?: Maybe<Validator_Status_Aggregate_Bool_Exp>;
  validator_voting_powers?: Maybe<Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: Maybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** columns and relationships of "validator_commission" */
export type Validator_Commission = {
  __typename?: 'validator_commission';
  commission: Scalars['numeric'];
  height: Scalars['bigint'];
  min_self_delegation: Scalars['bigint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_commission" */
export type Validator_Commission_Aggregate = {
  __typename?: 'validator_commission_aggregate';
  aggregate?: Maybe<Validator_Commission_Aggregate_Fields>;
  nodes: Array<Validator_Commission>;
};

export type Validator_Commission_Aggregate_Bool_Exp = {
  count?: Maybe<Validator_Commission_Aggregate_Bool_Exp_Count>;
};

export type Validator_Commission_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Validator_Commission_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Validator_Commission_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_Fields = {
  __typename?: 'validator_commission_aggregate_fields';
  avg?: Maybe<Validator_Commission_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Commission_Max_Fields>;
  min?: Maybe<Validator_Commission_Min_Fields>;
  stddev?: Maybe<Validator_Commission_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Commission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Commission_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Commission_Sum_Fields>;
  var_pop?: Maybe<Validator_Commission_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Commission_Var_Samp_Fields>;
  variance?: Maybe<Validator_Commission_Variance_Fields>;
};


/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Commission_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_commission" */
export type Validator_Commission_Aggregate_Order_By = {
  avg?: Maybe<Validator_Commission_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Validator_Commission_Max_Order_By>;
  min?: Maybe<Validator_Commission_Min_Order_By>;
  stddev?: Maybe<Validator_Commission_Stddev_Order_By>;
  stddev_pop?: Maybe<Validator_Commission_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Validator_Commission_Stddev_Samp_Order_By>;
  sum?: Maybe<Validator_Commission_Sum_Order_By>;
  var_pop?: Maybe<Validator_Commission_Var_Pop_Order_By>;
  var_samp?: Maybe<Validator_Commission_Var_Samp_Order_By>;
  variance?: Maybe<Validator_Commission_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_commission" */
export type Validator_Commission_Arr_Rel_Insert_Input = {
  data: Array<Validator_Commission_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Validator_Commission_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Commission_Avg_Fields = {
  __typename?: 'validator_commission_avg_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_commission" */
export type Validator_Commission_Avg_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_commission". All fields are combined with a logical 'AND'. */
export type Validator_Commission_Bool_Exp = {
  _and?: Maybe<Array<Validator_Commission_Bool_Exp>>;
  _not?: Maybe<Validator_Commission_Bool_Exp>;
  _or?: Maybe<Array<Validator_Commission_Bool_Exp>>;
  commission?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  min_self_delegation?: Maybe<Bigint_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "validator_commission" */
export enum Validator_Commission_Constraint {
  /** unique or primary key constraint on columns "validator_address" */
  ValidatorCommissionPkey = 'validator_commission_pkey'
}

/** input type for incrementing numeric columns in table "validator_commission" */
export type Validator_Commission_Inc_Input = {
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "validator_commission" */
export type Validator_Commission_Insert_Input = {
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['bigint']>;
  validator?: Maybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Validator_Commission_Max_Fields = {
  __typename?: 'validator_commission_max_fields';
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_commission" */
export type Validator_Commission_Max_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Commission_Min_Fields = {
  __typename?: 'validator_commission_min_fields';
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_commission" */
export type Validator_Commission_Min_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** response of any mutation on the table "validator_commission" */
export type Validator_Commission_Mutation_Response = {
  __typename?: 'validator_commission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Commission>;
};

/** on_conflict condition type for table "validator_commission" */
export type Validator_Commission_On_Conflict = {
  constraint: Validator_Commission_Constraint;
  update_columns?: Array<Validator_Commission_Update_Column>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_commission". */
export type Validator_Commission_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** primary key columns input for table: validator_commission */
export type Validator_Commission_Pk_Columns_Input = {
  validator_address: Scalars['String'];
};

/** select columns of table "validator_commission" */
export enum Validator_Commission_Select_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** input type for updating data in table "validator_commission" */
export type Validator_Commission_Set_Input = {
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Validator_Commission_Stddev_Fields = {
  __typename?: 'validator_commission_stddev_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Commission_Stddev_Pop_Fields = {
  __typename?: 'validator_commission_stddev_pop_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Pop_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Commission_Stddev_Samp_Fields = {
  __typename?: 'validator_commission_stddev_samp_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Samp_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
};

/** Streaming cursor of the table "validator_commission" */
export type Validator_Commission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Commission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Commission_Stream_Cursor_Value_Input = {
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Commission_Sum_Fields = {
  __typename?: 'validator_commission_sum_fields';
  commission?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_commission" */
export type Validator_Commission_Sum_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
};

/** update columns of table "validator_commission" */
export enum Validator_Commission_Update_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address'
}

export type Validator_Commission_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Validator_Commission_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Validator_Commission_Set_Input>;
  where: Validator_Commission_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Commission_Var_Pop_Fields = {
  __typename?: 'validator_commission_var_pop_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_commission" */
export type Validator_Commission_Var_Pop_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Commission_Var_Samp_Fields = {
  __typename?: 'validator_commission_var_samp_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_commission" */
export type Validator_Commission_Var_Samp_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Commission_Variance_Fields = {
  __typename?: 'validator_commission_variance_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_commission" */
export type Validator_Commission_Variance_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
};

/** unique or primary key constraints on table "validator" */
export enum Validator_Constraint {
  /** unique or primary key constraint on columns "consensus_pubkey" */
  ValidatorConsensusPubkeyKey = 'validator_consensus_pubkey_key',
  /** unique or primary key constraint on columns "consensus_address" */
  ValidatorPkey = 'validator_pkey'
}

/** columns and relationships of "validator_description" */
export type Validator_Description = {
  __typename?: 'validator_description';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height: Scalars['bigint'];
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "validator_description" */
export type Validator_Description_Aggregate = {
  __typename?: 'validator_description_aggregate';
  aggregate?: Maybe<Validator_Description_Aggregate_Fields>;
  nodes: Array<Validator_Description>;
};

export type Validator_Description_Aggregate_Bool_Exp = {
  count?: Maybe<Validator_Description_Aggregate_Bool_Exp_Count>;
};

export type Validator_Description_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Validator_Description_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Validator_Description_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_Fields = {
  __typename?: 'validator_description_aggregate_fields';
  avg?: Maybe<Validator_Description_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Description_Max_Fields>;
  min?: Maybe<Validator_Description_Min_Fields>;
  stddev?: Maybe<Validator_Description_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Description_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Description_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Description_Sum_Fields>;
  var_pop?: Maybe<Validator_Description_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Description_Var_Samp_Fields>;
  variance?: Maybe<Validator_Description_Variance_Fields>;
};


/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Description_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_description" */
export type Validator_Description_Aggregate_Order_By = {
  avg?: Maybe<Validator_Description_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Validator_Description_Max_Order_By>;
  min?: Maybe<Validator_Description_Min_Order_By>;
  stddev?: Maybe<Validator_Description_Stddev_Order_By>;
  stddev_pop?: Maybe<Validator_Description_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Validator_Description_Stddev_Samp_Order_By>;
  sum?: Maybe<Validator_Description_Sum_Order_By>;
  var_pop?: Maybe<Validator_Description_Var_Pop_Order_By>;
  var_samp?: Maybe<Validator_Description_Var_Samp_Order_By>;
  variance?: Maybe<Validator_Description_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_description" */
export type Validator_Description_Arr_Rel_Insert_Input = {
  data: Array<Validator_Description_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Validator_Description_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Description_Avg_Fields = {
  __typename?: 'validator_description_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_description" */
export type Validator_Description_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_description". All fields are combined with a logical 'AND'. */
export type Validator_Description_Bool_Exp = {
  _and?: Maybe<Array<Validator_Description_Bool_Exp>>;
  _not?: Maybe<Validator_Description_Bool_Exp>;
  _or?: Maybe<Array<Validator_Description_Bool_Exp>>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  details?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  identity?: Maybe<String_Comparison_Exp>;
  moniker?: Maybe<String_Comparison_Exp>;
  security_contact?: Maybe<String_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "validator_description" */
export enum Validator_Description_Constraint {
  /** unique or primary key constraint on columns "validator_address" */
  ValidatorDescriptionPkey = 'validator_description_pkey'
}

/** input type for incrementing numeric columns in table "validator_description" */
export type Validator_Description_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "validator_description" */
export type Validator_Description_Insert_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator?: Maybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Validator_Description_Max_Fields = {
  __typename?: 'validator_description_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_description" */
export type Validator_Description_Max_Order_By = {
  avatar_url?: Maybe<Order_By>;
  details?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  identity?: Maybe<Order_By>;
  moniker?: Maybe<Order_By>;
  security_contact?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Description_Min_Fields = {
  __typename?: 'validator_description_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_description" */
export type Validator_Description_Min_Order_By = {
  avatar_url?: Maybe<Order_By>;
  details?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  identity?: Maybe<Order_By>;
  moniker?: Maybe<Order_By>;
  security_contact?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** response of any mutation on the table "validator_description" */
export type Validator_Description_Mutation_Response = {
  __typename?: 'validator_description_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Description>;
};

/** on_conflict condition type for table "validator_description" */
export type Validator_Description_On_Conflict = {
  constraint: Validator_Description_Constraint;
  update_columns?: Array<Validator_Description_Update_Column>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_description". */
export type Validator_Description_Order_By = {
  avatar_url?: Maybe<Order_By>;
  details?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  identity?: Maybe<Order_By>;
  moniker?: Maybe<Order_By>;
  security_contact?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** primary key columns input for table: validator_description */
export type Validator_Description_Pk_Columns_Input = {
  validator_address: Scalars['String'];
};

/** select columns of table "validator_description" */
export enum Validator_Description_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "validator_description" */
export type Validator_Description_Set_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Validator_Description_Stddev_Fields = {
  __typename?: 'validator_description_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_description" */
export type Validator_Description_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Description_Stddev_Pop_Fields = {
  __typename?: 'validator_description_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_description" */
export type Validator_Description_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Description_Stddev_Samp_Fields = {
  __typename?: 'validator_description_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_description" */
export type Validator_Description_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** Streaming cursor of the table "validator_description" */
export type Validator_Description_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Description_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Description_Stream_Cursor_Value_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Description_Sum_Fields = {
  __typename?: 'validator_description_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_description" */
export type Validator_Description_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** update columns of table "validator_description" */
export enum Validator_Description_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website'
}

export type Validator_Description_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Validator_Description_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Validator_Description_Set_Input>;
  where: Validator_Description_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Description_Var_Pop_Fields = {
  __typename?: 'validator_description_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_description" */
export type Validator_Description_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Description_Var_Samp_Fields = {
  __typename?: 'validator_description_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_description" */
export type Validator_Description_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Description_Variance_Fields = {
  __typename?: 'validator_description_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_description" */
export type Validator_Description_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** columns and relationships of "validator_info" */
export type Validator_Info = {
  __typename?: 'validator_info';
  /** An object relationship */
  account?: Maybe<Account>;
  consensus_address: Scalars['String'];
  height: Scalars['bigint'];
  max_change_rate: Scalars['String'];
  max_rate: Scalars['String'];
  operator_address: Scalars['String'];
  self_delegate_address?: Maybe<Scalars['String']>;
  /** An object relationship */
  validator: Validator;
};

/** aggregated selection of "validator_info" */
export type Validator_Info_Aggregate = {
  __typename?: 'validator_info_aggregate';
  aggregate?: Maybe<Validator_Info_Aggregate_Fields>;
  nodes: Array<Validator_Info>;
};

export type Validator_Info_Aggregate_Bool_Exp = {
  count?: Maybe<Validator_Info_Aggregate_Bool_Exp_Count>;
};

export type Validator_Info_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Validator_Info_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Validator_Info_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_info" */
export type Validator_Info_Aggregate_Fields = {
  __typename?: 'validator_info_aggregate_fields';
  avg?: Maybe<Validator_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Info_Max_Fields>;
  min?: Maybe<Validator_Info_Min_Fields>;
  stddev?: Maybe<Validator_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Info_Sum_Fields>;
  var_pop?: Maybe<Validator_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Info_Var_Samp_Fields>;
  variance?: Maybe<Validator_Info_Variance_Fields>;
};


/** aggregate fields of "validator_info" */
export type Validator_Info_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Info_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_info" */
export type Validator_Info_Aggregate_Order_By = {
  avg?: Maybe<Validator_Info_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Validator_Info_Max_Order_By>;
  min?: Maybe<Validator_Info_Min_Order_By>;
  stddev?: Maybe<Validator_Info_Stddev_Order_By>;
  stddev_pop?: Maybe<Validator_Info_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Validator_Info_Stddev_Samp_Order_By>;
  sum?: Maybe<Validator_Info_Sum_Order_By>;
  var_pop?: Maybe<Validator_Info_Var_Pop_Order_By>;
  var_samp?: Maybe<Validator_Info_Var_Samp_Order_By>;
  variance?: Maybe<Validator_Info_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_info" */
export type Validator_Info_Arr_Rel_Insert_Input = {
  data: Array<Validator_Info_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Validator_Info_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Info_Avg_Fields = {
  __typename?: 'validator_info_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_info" */
export type Validator_Info_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_info". All fields are combined with a logical 'AND'. */
export type Validator_Info_Bool_Exp = {
  _and?: Maybe<Array<Validator_Info_Bool_Exp>>;
  _not?: Maybe<Validator_Info_Bool_Exp>;
  _or?: Maybe<Array<Validator_Info_Bool_Exp>>;
  account?: Maybe<Account_Bool_Exp>;
  consensus_address?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  max_change_rate?: Maybe<String_Comparison_Exp>;
  max_rate?: Maybe<String_Comparison_Exp>;
  operator_address?: Maybe<String_Comparison_Exp>;
  self_delegate_address?: Maybe<String_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
};

/** unique or primary key constraints on table "validator_info" */
export enum Validator_Info_Constraint {
  /** unique or primary key constraint on columns "operator_address" */
  ValidatorInfoOperatorAddressKey = 'validator_info_operator_address_key',
  /** unique or primary key constraint on columns "consensus_address" */
  ValidatorInfoPkey = 'validator_info_pkey'
}

/** input type for incrementing numeric columns in table "validator_info" */
export type Validator_Info_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "validator_info" */
export type Validator_Info_Insert_Input = {
  account?: Maybe<Account_Obj_Rel_Insert_Input>;
  consensus_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  max_change_rate?: Maybe<Scalars['String']>;
  max_rate?: Maybe<Scalars['String']>;
  operator_address?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
  validator?: Maybe<Validator_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Info_Max_Fields = {
  __typename?: 'validator_info_max_fields';
  consensus_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  max_change_rate?: Maybe<Scalars['String']>;
  max_rate?: Maybe<Scalars['String']>;
  operator_address?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_info" */
export type Validator_Info_Max_Order_By = {
  consensus_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  max_change_rate?: Maybe<Order_By>;
  max_rate?: Maybe<Order_By>;
  operator_address?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Info_Min_Fields = {
  __typename?: 'validator_info_min_fields';
  consensus_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  max_change_rate?: Maybe<Scalars['String']>;
  max_rate?: Maybe<Scalars['String']>;
  operator_address?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_info" */
export type Validator_Info_Min_Order_By = {
  consensus_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  max_change_rate?: Maybe<Order_By>;
  max_rate?: Maybe<Order_By>;
  operator_address?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
};

/** response of any mutation on the table "validator_info" */
export type Validator_Info_Mutation_Response = {
  __typename?: 'validator_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Info>;
};

/** input type for inserting object relation for remote table "validator_info" */
export type Validator_Info_Obj_Rel_Insert_Input = {
  data: Validator_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Validator_Info_On_Conflict>;
};

/** on_conflict condition type for table "validator_info" */
export type Validator_Info_On_Conflict = {
  constraint: Validator_Info_Constraint;
  update_columns?: Array<Validator_Info_Update_Column>;
  where?: Maybe<Validator_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_info". */
export type Validator_Info_Order_By = {
  account?: Maybe<Account_Order_By>;
  consensus_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  max_change_rate?: Maybe<Order_By>;
  max_rate?: Maybe<Order_By>;
  operator_address?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
};

/** primary key columns input for table: validator_info */
export type Validator_Info_Pk_Columns_Input = {
  consensus_address: Scalars['String'];
};

/** select columns of table "validator_info" */
export enum Validator_Info_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  Height = 'height',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

/** input type for updating data in table "validator_info" */
export type Validator_Info_Set_Input = {
  consensus_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  max_change_rate?: Maybe<Scalars['String']>;
  max_rate?: Maybe<Scalars['String']>;
  operator_address?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Validator_Info_Stddev_Fields = {
  __typename?: 'validator_info_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_info" */
export type Validator_Info_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Info_Stddev_Pop_Fields = {
  __typename?: 'validator_info_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_info" */
export type Validator_Info_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Info_Stddev_Samp_Fields = {
  __typename?: 'validator_info_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_info" */
export type Validator_Info_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** Streaming cursor of the table "validator_info" */
export type Validator_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Info_Stream_Cursor_Value_Input = {
  consensus_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  max_change_rate?: Maybe<Scalars['String']>;
  max_rate?: Maybe<Scalars['String']>;
  operator_address?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Info_Sum_Fields = {
  __typename?: 'validator_info_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_info" */
export type Validator_Info_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** update columns of table "validator_info" */
export enum Validator_Info_Update_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  Height = 'height',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

export type Validator_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Validator_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Validator_Info_Set_Input>;
  where: Validator_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Info_Var_Pop_Fields = {
  __typename?: 'validator_info_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_info" */
export type Validator_Info_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Info_Var_Samp_Fields = {
  __typename?: 'validator_info_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_info" */
export type Validator_Info_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Info_Variance_Fields = {
  __typename?: 'validator_info_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_info" */
export type Validator_Info_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** input type for inserting data into table "validator" */
export type Validator_Insert_Input = {
  blocks?: Maybe<Block_Arr_Rel_Insert_Input>;
  consensus_address?: Maybe<Scalars['String']>;
  consensus_pubkey?: Maybe<Scalars['String']>;
  double_sign_votes?: Maybe<Double_Sign_Vote_Arr_Rel_Insert_Input>;
  pre_commits?: Maybe<Pre_Commit_Arr_Rel_Insert_Input>;
  proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Obj_Rel_Insert_Input>;
  proposal_validator_status_snapshots?: Maybe<Proposal_Validator_Status_Snapshot_Arr_Rel_Insert_Input>;
  validator_commissions?: Maybe<Validator_Commission_Arr_Rel_Insert_Input>;
  validator_descriptions?: Maybe<Validator_Description_Arr_Rel_Insert_Input>;
  validator_info?: Maybe<Validator_Info_Obj_Rel_Insert_Input>;
  validator_infos?: Maybe<Validator_Info_Arr_Rel_Insert_Input>;
  validator_signing_infos?: Maybe<Validator_Signing_Info_Arr_Rel_Insert_Input>;
  validator_statuses?: Maybe<Validator_Status_Arr_Rel_Insert_Input>;
  validator_voting_powers?: Maybe<Validator_Voting_Power_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Validator_Max_Fields = {
  __typename?: 'validator_max_fields';
  consensus_address?: Maybe<Scalars['String']>;
  consensus_pubkey?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Validator_Min_Fields = {
  __typename?: 'validator_min_fields';
  consensus_address?: Maybe<Scalars['String']>;
  consensus_pubkey?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "validator" */
export type Validator_Mutation_Response = {
  __typename?: 'validator_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator>;
};

/** input type for inserting object relation for remote table "validator" */
export type Validator_Obj_Rel_Insert_Input = {
  data: Validator_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Validator_On_Conflict>;
};

/** on_conflict condition type for table "validator" */
export type Validator_On_Conflict = {
  constraint: Validator_Constraint;
  update_columns?: Array<Validator_Update_Column>;
  where?: Maybe<Validator_Bool_Exp>;
};

/** Ordering options when selecting data from "validator". */
export type Validator_Order_By = {
  blocks_aggregate?: Maybe<Block_Aggregate_Order_By>;
  consensus_address?: Maybe<Order_By>;
  consensus_pubkey?: Maybe<Order_By>;
  double_sign_votes_aggregate?: Maybe<Double_Sign_Vote_Aggregate_Order_By>;
  pre_commits_aggregate?: Maybe<Pre_Commit_Aggregate_Order_By>;
  proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot_Order_By>;
  proposal_validator_status_snapshots_aggregate?: Maybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  validator_commissions_aggregate?: Maybe<Validator_Commission_Aggregate_Order_By>;
  validator_descriptions_aggregate?: Maybe<Validator_Description_Aggregate_Order_By>;
  validator_info?: Maybe<Validator_Info_Order_By>;
  validator_infos_aggregate?: Maybe<Validator_Info_Aggregate_Order_By>;
  validator_signing_infos_aggregate?: Maybe<Validator_Signing_Info_Aggregate_Order_By>;
  validator_statuses_aggregate?: Maybe<Validator_Status_Aggregate_Order_By>;
  validator_voting_powers_aggregate?: Maybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** primary key columns input for table: validator */
export type Validator_Pk_Columns_Input = {
  consensus_address: Scalars['String'];
};

/** select columns of table "validator" */
export enum Validator_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

/** input type for updating data in table "validator" */
export type Validator_Set_Input = {
  consensus_address?: Maybe<Scalars['String']>;
  consensus_pubkey?: Maybe<Scalars['String']>;
};

/** columns and relationships of "validator_signing_info" */
export type Validator_Signing_Info = {
  __typename?: 'validator_signing_info';
  height: Scalars['bigint'];
  index_offset: Scalars['bigint'];
  jailed_until: Scalars['timestamp'];
  missed_blocks_counter: Scalars['bigint'];
  start_height: Scalars['bigint'];
  tombstoned: Scalars['Boolean'];
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate = {
  __typename?: 'validator_signing_info_aggregate';
  aggregate?: Maybe<Validator_Signing_Info_Aggregate_Fields>;
  nodes: Array<Validator_Signing_Info>;
};

export type Validator_Signing_Info_Aggregate_Bool_Exp = {
  bool_and?: Maybe<Validator_Signing_Info_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: Maybe<Validator_Signing_Info_Aggregate_Bool_Exp_Bool_Or>;
  count?: Maybe<Validator_Signing_Info_Aggregate_Bool_Exp_Count>;
};

export type Validator_Signing_Info_Aggregate_Bool_Exp_Bool_And = {
  arguments: Validator_Signing_Info_Select_Column_Validator_Signing_Info_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Validator_Signing_Info_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Signing_Info_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Validator_Signing_Info_Select_Column_Validator_Signing_Info_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Validator_Signing_Info_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Signing_Info_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Validator_Signing_Info_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Validator_Signing_Info_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_Fields = {
  __typename?: 'validator_signing_info_aggregate_fields';
  avg?: Maybe<Validator_Signing_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Signing_Info_Max_Fields>;
  min?: Maybe<Validator_Signing_Info_Min_Fields>;
  stddev?: Maybe<Validator_Signing_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Signing_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Signing_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Signing_Info_Sum_Fields>;
  var_pop?: Maybe<Validator_Signing_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Signing_Info_Var_Samp_Fields>;
  variance?: Maybe<Validator_Signing_Info_Variance_Fields>;
};


/** aggregate fields of "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Signing_Info_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_Order_By = {
  avg?: Maybe<Validator_Signing_Info_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Validator_Signing_Info_Max_Order_By>;
  min?: Maybe<Validator_Signing_Info_Min_Order_By>;
  stddev?: Maybe<Validator_Signing_Info_Stddev_Order_By>;
  stddev_pop?: Maybe<Validator_Signing_Info_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Validator_Signing_Info_Stddev_Samp_Order_By>;
  sum?: Maybe<Validator_Signing_Info_Sum_Order_By>;
  var_pop?: Maybe<Validator_Signing_Info_Var_Pop_Order_By>;
  var_samp?: Maybe<Validator_Signing_Info_Var_Samp_Order_By>;
  variance?: Maybe<Validator_Signing_Info_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_signing_info" */
export type Validator_Signing_Info_Arr_Rel_Insert_Input = {
  data: Array<Validator_Signing_Info_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Validator_Signing_Info_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Signing_Info_Avg_Fields = {
  __typename?: 'validator_signing_info_avg_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Avg_Order_By = {
  height?: Maybe<Order_By>;
  index_offset?: Maybe<Order_By>;
  missed_blocks_counter?: Maybe<Order_By>;
  start_height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_signing_info". All fields are combined with a logical 'AND'. */
export type Validator_Signing_Info_Bool_Exp = {
  _and?: Maybe<Array<Validator_Signing_Info_Bool_Exp>>;
  _not?: Maybe<Validator_Signing_Info_Bool_Exp>;
  _or?: Maybe<Array<Validator_Signing_Info_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  index_offset?: Maybe<Bigint_Comparison_Exp>;
  jailed_until?: Maybe<Timestamp_Comparison_Exp>;
  missed_blocks_counter?: Maybe<Bigint_Comparison_Exp>;
  start_height?: Maybe<Bigint_Comparison_Exp>;
  tombstoned?: Maybe<Boolean_Comparison_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "validator_signing_info" */
export enum Validator_Signing_Info_Constraint {
  /** unique or primary key constraint on columns "validator_address" */
  ValidatorSigningInfoPkey = 'validator_signing_info_pkey'
}

/** input type for incrementing numeric columns in table "validator_signing_info" */
export type Validator_Signing_Info_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "validator_signing_info" */
export type Validator_Signing_Info_Insert_Input = {
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  jailed_until?: Maybe<Scalars['timestamp']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
  tombstoned?: Maybe<Scalars['Boolean']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Validator_Signing_Info_Max_Fields = {
  __typename?: 'validator_signing_info_max_fields';
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  jailed_until?: Maybe<Scalars['timestamp']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Max_Order_By = {
  height?: Maybe<Order_By>;
  index_offset?: Maybe<Order_By>;
  jailed_until?: Maybe<Order_By>;
  missed_blocks_counter?: Maybe<Order_By>;
  start_height?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Signing_Info_Min_Fields = {
  __typename?: 'validator_signing_info_min_fields';
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  jailed_until?: Maybe<Scalars['timestamp']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Min_Order_By = {
  height?: Maybe<Order_By>;
  index_offset?: Maybe<Order_By>;
  jailed_until?: Maybe<Order_By>;
  missed_blocks_counter?: Maybe<Order_By>;
  start_height?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** response of any mutation on the table "validator_signing_info" */
export type Validator_Signing_Info_Mutation_Response = {
  __typename?: 'validator_signing_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Signing_Info>;
};

/** on_conflict condition type for table "validator_signing_info" */
export type Validator_Signing_Info_On_Conflict = {
  constraint: Validator_Signing_Info_Constraint;
  update_columns?: Array<Validator_Signing_Info_Update_Column>;
  where?: Maybe<Validator_Signing_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_signing_info". */
export type Validator_Signing_Info_Order_By = {
  height?: Maybe<Order_By>;
  index_offset?: Maybe<Order_By>;
  jailed_until?: Maybe<Order_By>;
  missed_blocks_counter?: Maybe<Order_By>;
  start_height?: Maybe<Order_By>;
  tombstoned?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** primary key columns input for table: validator_signing_info */
export type Validator_Signing_Info_Pk_Columns_Input = {
  validator_address: Scalars['String'];
};

/** select columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IndexOffset = 'index_offset',
  /** column name */
  JailedUntil = 'jailed_until',
  /** column name */
  MissedBlocksCounter = 'missed_blocks_counter',
  /** column name */
  StartHeight = 'start_height',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** select "validator_signing_info_aggregate_bool_exp_bool_and_arguments_columns" columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Select_Column_Validator_Signing_Info_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Tombstoned = 'tombstoned'
}

/** select "validator_signing_info_aggregate_bool_exp_bool_or_arguments_columns" columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Select_Column_Validator_Signing_Info_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Tombstoned = 'tombstoned'
}

/** input type for updating data in table "validator_signing_info" */
export type Validator_Signing_Info_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  jailed_until?: Maybe<Scalars['timestamp']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
  tombstoned?: Maybe<Scalars['Boolean']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Validator_Signing_Info_Stddev_Fields = {
  __typename?: 'validator_signing_info_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  index_offset?: Maybe<Order_By>;
  missed_blocks_counter?: Maybe<Order_By>;
  start_height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Signing_Info_Stddev_Pop_Fields = {
  __typename?: 'validator_signing_info_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  index_offset?: Maybe<Order_By>;
  missed_blocks_counter?: Maybe<Order_By>;
  start_height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Signing_Info_Stddev_Samp_Fields = {
  __typename?: 'validator_signing_info_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  index_offset?: Maybe<Order_By>;
  missed_blocks_counter?: Maybe<Order_By>;
  start_height?: Maybe<Order_By>;
};

/** Streaming cursor of the table "validator_signing_info" */
export type Validator_Signing_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Signing_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Signing_Info_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  jailed_until?: Maybe<Scalars['timestamp']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
  tombstoned?: Maybe<Scalars['Boolean']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Signing_Info_Sum_Fields = {
  __typename?: 'validator_signing_info_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  index_offset?: Maybe<Scalars['bigint']>;
  missed_blocks_counter?: Maybe<Scalars['bigint']>;
  start_height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Sum_Order_By = {
  height?: Maybe<Order_By>;
  index_offset?: Maybe<Order_By>;
  missed_blocks_counter?: Maybe<Order_By>;
  start_height?: Maybe<Order_By>;
};

/** update columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IndexOffset = 'index_offset',
  /** column name */
  JailedUntil = 'jailed_until',
  /** column name */
  MissedBlocksCounter = 'missed_blocks_counter',
  /** column name */
  StartHeight = 'start_height',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

export type Validator_Signing_Info_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Validator_Signing_Info_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Validator_Signing_Info_Set_Input>;
  where: Validator_Signing_Info_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Signing_Info_Var_Pop_Fields = {
  __typename?: 'validator_signing_info_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  index_offset?: Maybe<Order_By>;
  missed_blocks_counter?: Maybe<Order_By>;
  start_height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Signing_Info_Var_Samp_Fields = {
  __typename?: 'validator_signing_info_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  index_offset?: Maybe<Order_By>;
  missed_blocks_counter?: Maybe<Order_By>;
  start_height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Signing_Info_Variance_Fields = {
  __typename?: 'validator_signing_info_variance_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Variance_Order_By = {
  height?: Maybe<Order_By>;
  index_offset?: Maybe<Order_By>;
  missed_blocks_counter?: Maybe<Order_By>;
  start_height?: Maybe<Order_By>;
};

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status';
  height: Scalars['bigint'];
  jailed: Scalars['Boolean'];
  status: Scalars['Int'];
  tombstoned: Scalars['Boolean'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate';
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>;
  nodes: Array<Validator_Status>;
};

export type Validator_Status_Aggregate_Bool_Exp = {
  bool_and?: Maybe<Validator_Status_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: Maybe<Validator_Status_Aggregate_Bool_Exp_Bool_Or>;
  count?: Maybe<Validator_Status_Aggregate_Bool_Exp_Count>;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_And = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Validator_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Validator_Status_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_Fields = {
  __typename?: 'validator_status_aggregate_fields';
  avg?: Maybe<Validator_Status_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Status_Max_Fields>;
  min?: Maybe<Validator_Status_Min_Fields>;
  stddev?: Maybe<Validator_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Status_Sum_Fields>;
  var_pop?: Maybe<Validator_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Status_Var_Samp_Fields>;
  variance?: Maybe<Validator_Status_Variance_Fields>;
};


/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_status" */
export type Validator_Status_Aggregate_Order_By = {
  avg?: Maybe<Validator_Status_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Validator_Status_Max_Order_By>;
  min?: Maybe<Validator_Status_Min_Order_By>;
  stddev?: Maybe<Validator_Status_Stddev_Order_By>;
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Order_By>;
  sum?: Maybe<Validator_Status_Sum_Order_By>;
  var_pop?: Maybe<Validator_Status_Var_Pop_Order_By>;
  var_samp?: Maybe<Validator_Status_Var_Samp_Order_By>;
  variance?: Maybe<Validator_Status_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_status" */
export type Validator_Status_Arr_Rel_Insert_Input = {
  data: Array<Validator_Status_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Validator_Status_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_status" */
export type Validator_Status_Avg_Order_By = {
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: Maybe<Array<Validator_Status_Bool_Exp>>;
  _not?: Maybe<Validator_Status_Bool_Exp>;
  _or?: Maybe<Array<Validator_Status_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  jailed?: Maybe<Boolean_Comparison_Exp>;
  status?: Maybe<Int_Comparison_Exp>;
  tombstoned?: Maybe<Boolean_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "validator_status" */
export enum Validator_Status_Constraint {
  /** unique or primary key constraint on columns "validator_address" */
  ValidatorStatusPkey = 'validator_status_pkey'
}

/** input type for incrementing numeric columns in table "validator_status" */
export type Validator_Status_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "validator_status" */
export type Validator_Status_Insert_Input = {
  height?: Maybe<Scalars['bigint']>;
  jailed?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Int']>;
  tombstoned?: Maybe<Scalars['Boolean']>;
  validator?: Maybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_status" */
export type Validator_Status_Max_Order_By = {
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_status" */
export type Validator_Status_Min_Order_By = {
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** response of any mutation on the table "validator_status" */
export type Validator_Status_Mutation_Response = {
  __typename?: 'validator_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Status>;
};

/** on_conflict condition type for table "validator_status" */
export type Validator_Status_On_Conflict = {
  constraint: Validator_Status_Constraint;
  update_columns?: Array<Validator_Status_Update_Column>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  height?: Maybe<Order_By>;
  jailed?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  tombstoned?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** primary key columns input for table: validator_status */
export type Validator_Status_Pk_Columns_Input = {
  validator_address: Scalars['String'];
};

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** select "validator_status_aggregate_bool_exp_bool_and_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Tombstoned = 'tombstoned'
}

/** select "validator_status_aggregate_bool_exp_bool_or_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Tombstoned = 'tombstoned'
}

/** input type for updating data in table "validator_status" */
export type Validator_Status_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  jailed?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Int']>;
  tombstoned?: Maybe<Scalars['Boolean']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_status" */
export type Validator_Status_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_status" */
export type Validator_Status_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_status" */
export type Validator_Status_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** Streaming cursor of the table "validator_status" */
export type Validator_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Status_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  jailed?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Int']>;
  tombstoned?: Maybe<Scalars['Boolean']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "validator_status" */
export type Validator_Status_Sum_Order_By = {
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** update columns of table "validator_status" */
export enum Validator_Status_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

export type Validator_Status_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Validator_Status_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Validator_Status_Set_Input>;
  where: Validator_Status_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_status" */
export type Validator_Status_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_status" */
export type Validator_Status_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_status" */
export type Validator_Status_Variance_Order_By = {
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** Streaming cursor of the table "validator" */
export type Validator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Stream_Cursor_Value_Input = {
  consensus_address?: Maybe<Scalars['String']>;
  consensus_pubkey?: Maybe<Scalars['String']>;
};

/** update columns of table "validator" */
export enum Validator_Update_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

export type Validator_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Validator_Set_Input>;
  where: Validator_Bool_Exp;
};

/** columns and relationships of "validator_voting_power" */
export type Validator_Voting_Power = {
  __typename?: 'validator_voting_power';
  /** An object relationship */
  block: Block;
  height: Scalars['bigint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate = {
  __typename?: 'validator_voting_power_aggregate';
  aggregate?: Maybe<Validator_Voting_Power_Aggregate_Fields>;
  nodes: Array<Validator_Voting_Power>;
};

export type Validator_Voting_Power_Aggregate_Bool_Exp = {
  count?: Maybe<Validator_Voting_Power_Aggregate_Bool_Exp_Count>;
};

export type Validator_Voting_Power_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Validator_Voting_Power_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Fields = {
  __typename?: 'validator_voting_power_aggregate_fields';
  avg?: Maybe<Validator_Voting_Power_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Voting_Power_Max_Fields>;
  min?: Maybe<Validator_Voting_Power_Min_Fields>;
  stddev?: Maybe<Validator_Voting_Power_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Voting_Power_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Voting_Power_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Voting_Power_Sum_Fields>;
  var_pop?: Maybe<Validator_Voting_Power_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Voting_Power_Var_Samp_Fields>;
  variance?: Maybe<Validator_Voting_Power_Variance_Fields>;
};


/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Order_By = {
  avg?: Maybe<Validator_Voting_Power_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Validator_Voting_Power_Max_Order_By>;
  min?: Maybe<Validator_Voting_Power_Min_Order_By>;
  stddev?: Maybe<Validator_Voting_Power_Stddev_Order_By>;
  stddev_pop?: Maybe<Validator_Voting_Power_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Validator_Voting_Power_Stddev_Samp_Order_By>;
  sum?: Maybe<Validator_Voting_Power_Sum_Order_By>;
  var_pop?: Maybe<Validator_Voting_Power_Var_Pop_Order_By>;
  var_samp?: Maybe<Validator_Voting_Power_Var_Samp_Order_By>;
  variance?: Maybe<Validator_Voting_Power_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "validator_voting_power" */
export type Validator_Voting_Power_Arr_Rel_Insert_Input = {
  data: Array<Validator_Voting_Power_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Validator_Voting_Power_On_Conflict>;
};

/** aggregate avg on columns */
export type Validator_Voting_Power_Avg_Fields = {
  __typename?: 'validator_voting_power_avg_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Avg_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_voting_power". All fields are combined with a logical 'AND'. */
export type Validator_Voting_Power_Bool_Exp = {
  _and?: Maybe<Array<Validator_Voting_Power_Bool_Exp>>;
  _not?: Maybe<Validator_Voting_Power_Bool_Exp>;
  _or?: Maybe<Array<Validator_Voting_Power_Bool_Exp>>;
  block?: Maybe<Block_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
  voting_power?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "validator_voting_power" */
export enum Validator_Voting_Power_Constraint {
  /** unique or primary key constraint on columns "validator_address" */
  ValidatorVotingPowerPkey = 'validator_voting_power_pkey'
}

/** input type for incrementing numeric columns in table "validator_voting_power" */
export type Validator_Voting_Power_Inc_Input = {
  height?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "validator_voting_power" */
export type Validator_Voting_Power_Insert_Input = {
  block?: Maybe<Block_Obj_Rel_Insert_Input>;
  height?: Maybe<Scalars['bigint']>;
  validator?: Maybe<Validator_Obj_Rel_Insert_Input>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Validator_Voting_Power_Max_Fields = {
  __typename?: 'validator_voting_power_max_fields';
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Max_Order_By = {
  height?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Voting_Power_Min_Fields = {
  __typename?: 'validator_voting_power_min_fields';
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Min_Order_By = {
  height?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** response of any mutation on the table "validator_voting_power" */
export type Validator_Voting_Power_Mutation_Response = {
  __typename?: 'validator_voting_power_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Validator_Voting_Power>;
};

/** on_conflict condition type for table "validator_voting_power" */
export type Validator_Voting_Power_On_Conflict = {
  constraint: Validator_Voting_Power_Constraint;
  update_columns?: Array<Validator_Voting_Power_Update_Column>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};

/** Ordering options when selecting data from "validator_voting_power". */
export type Validator_Voting_Power_Order_By = {
  block?: Maybe<Block_Order_By>;
  height?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** primary key columns input for table: validator_voting_power */
export type Validator_Voting_Power_Pk_Columns_Input = {
  validator_address: Scalars['String'];
};

/** select columns of table "validator_voting_power" */
export enum Validator_Voting_Power_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** input type for updating data in table "validator_voting_power" */
export type Validator_Voting_Power_Set_Input = {
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Validator_Voting_Power_Stddev_Fields = {
  __typename?: 'validator_voting_power_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'validator_voting_power_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'validator_voting_power_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** Streaming cursor of the table "validator_voting_power" */
export type Validator_Voting_Power_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Voting_Power_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Voting_Power_Stream_Cursor_Value_Input = {
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Validator_Voting_Power_Sum_Fields = {
  __typename?: 'validator_voting_power_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Sum_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** update columns of table "validator_voting_power" */
export enum Validator_Voting_Power_Update_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

export type Validator_Voting_Power_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Validator_Voting_Power_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Validator_Voting_Power_Set_Input>;
  where: Validator_Voting_Power_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Validator_Voting_Power_Var_Pop_Fields = {
  __typename?: 'validator_voting_power_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Voting_Power_Var_Samp_Fields = {
  __typename?: 'validator_voting_power_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Voting_Power_Variance_Fields = {
  __typename?: 'validator_voting_power_variance_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Variance_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** columns and relationships of "vesting_account" */
export type Vesting_Account = {
  __typename?: 'vesting_account';
  /** An object relationship */
  account: Account;
  address: Scalars['String'];
  end_time: Scalars['timestamp'];
  id: Scalars['Int'];
  original_vesting: Scalars['_coin'];
  start_time?: Maybe<Scalars['timestamp']>;
  type: Scalars['String'];
  /** An array relationship */
  vesting_periods: Array<Vesting_Period>;
  /** An aggregate relationship */
  vesting_periods_aggregate: Vesting_Period_Aggregate;
};


/** columns and relationships of "vesting_account" */
export type Vesting_AccountVesting_PeriodsArgs = {
  distinct_on?: Maybe<Array<Vesting_Period_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Period_Order_By>>;
  where?: Maybe<Vesting_Period_Bool_Exp>;
};


/** columns and relationships of "vesting_account" */
export type Vesting_AccountVesting_Periods_AggregateArgs = {
  distinct_on?: Maybe<Array<Vesting_Period_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vesting_Period_Order_By>>;
  where?: Maybe<Vesting_Period_Bool_Exp>;
};

/** aggregated selection of "vesting_account" */
export type Vesting_Account_Aggregate = {
  __typename?: 'vesting_account_aggregate';
  aggregate?: Maybe<Vesting_Account_Aggregate_Fields>;
  nodes: Array<Vesting_Account>;
};

export type Vesting_Account_Aggregate_Bool_Exp = {
  count?: Maybe<Vesting_Account_Aggregate_Bool_Exp_Count>;
};

export type Vesting_Account_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Vesting_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Vesting_Account_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vesting_account" */
export type Vesting_Account_Aggregate_Fields = {
  __typename?: 'vesting_account_aggregate_fields';
  avg?: Maybe<Vesting_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vesting_Account_Max_Fields>;
  min?: Maybe<Vesting_Account_Min_Fields>;
  stddev?: Maybe<Vesting_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Vesting_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vesting_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Vesting_Account_Sum_Fields>;
  var_pop?: Maybe<Vesting_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Vesting_Account_Var_Samp_Fields>;
  variance?: Maybe<Vesting_Account_Variance_Fields>;
};


/** aggregate fields of "vesting_account" */
export type Vesting_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vesting_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vesting_account" */
export type Vesting_Account_Aggregate_Order_By = {
  avg?: Maybe<Vesting_Account_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vesting_Account_Max_Order_By>;
  min?: Maybe<Vesting_Account_Min_Order_By>;
  stddev?: Maybe<Vesting_Account_Stddev_Order_By>;
  stddev_pop?: Maybe<Vesting_Account_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vesting_Account_Stddev_Samp_Order_By>;
  sum?: Maybe<Vesting_Account_Sum_Order_By>;
  var_pop?: Maybe<Vesting_Account_Var_Pop_Order_By>;
  var_samp?: Maybe<Vesting_Account_Var_Samp_Order_By>;
  variance?: Maybe<Vesting_Account_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vesting_account" */
export type Vesting_Account_Arr_Rel_Insert_Input = {
  data: Array<Vesting_Account_Insert_Input>;
  /** upsert condition */
  on_conflict?: Maybe<Vesting_Account_On_Conflict>;
};

/** aggregate avg on columns */
export type Vesting_Account_Avg_Fields = {
  __typename?: 'vesting_account_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vesting_account" */
export type Vesting_Account_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vesting_account". All fields are combined with a logical 'AND'. */
export type Vesting_Account_Bool_Exp = {
  _and?: Maybe<Array<Vesting_Account_Bool_Exp>>;
  _not?: Maybe<Vesting_Account_Bool_Exp>;
  _or?: Maybe<Array<Vesting_Account_Bool_Exp>>;
  account?: Maybe<Account_Bool_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  end_time?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  original_vesting?: Maybe<_Coin_Comparison_Exp>;
  start_time?: Maybe<Timestamp_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  vesting_periods?: Maybe<Vesting_Period_Bool_Exp>;
  vesting_periods_aggregate?: Maybe<Vesting_Period_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "vesting_account" */
export enum Vesting_Account_Constraint {
  /** unique or primary key constraint on columns "address" */
  VestingAccountAddressIdx = 'vesting_account_address_idx',
  /** unique or primary key constraint on columns "id" */
  VestingAccountPkey = 'vesting_account_pkey'
}

/** input type for incrementing numeric columns in table "vesting_account" */
export type Vesting_Account_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "vesting_account" */
export type Vesting_Account_Insert_Input = {
  account?: Maybe<Account_Obj_Rel_Insert_Input>;
  address?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  original_vesting?: Maybe<Scalars['_coin']>;
  start_time?: Maybe<Scalars['timestamp']>;
  type?: Maybe<Scalars['String']>;
  vesting_periods?: Maybe<Vesting_Period_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Vesting_Account_Max_Fields = {
  __typename?: 'vesting_account_max_fields';
  address?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  start_time?: Maybe<Scalars['timestamp']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vesting_account" */
export type Vesting_Account_Max_Order_By = {
  address?: Maybe<Order_By>;
  end_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vesting_Account_Min_Fields = {
  __typename?: 'vesting_account_min_fields';
  address?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  start_time?: Maybe<Scalars['timestamp']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vesting_account" */
export type Vesting_Account_Min_Order_By = {
  address?: Maybe<Order_By>;
  end_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "vesting_account" */
export type Vesting_Account_Mutation_Response = {
  __typename?: 'vesting_account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vesting_Account>;
};

/** input type for inserting object relation for remote table "vesting_account" */
export type Vesting_Account_Obj_Rel_Insert_Input = {
  data: Vesting_Account_Insert_Input;
  /** upsert condition */
  on_conflict?: Maybe<Vesting_Account_On_Conflict>;
};

/** on_conflict condition type for table "vesting_account" */
export type Vesting_Account_On_Conflict = {
  constraint: Vesting_Account_Constraint;
  update_columns?: Array<Vesting_Account_Update_Column>;
  where?: Maybe<Vesting_Account_Bool_Exp>;
};

/** Ordering options when selecting data from "vesting_account". */
export type Vesting_Account_Order_By = {
  account?: Maybe<Account_Order_By>;
  address?: Maybe<Order_By>;
  end_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  original_vesting?: Maybe<Order_By>;
  start_time?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  vesting_periods_aggregate?: Maybe<Vesting_Period_Aggregate_Order_By>;
};

/** primary key columns input for table: vesting_account */
export type Vesting_Account_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vesting_account" */
export enum Vesting_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalVesting = 'original_vesting',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "vesting_account" */
export type Vesting_Account_Set_Input = {
  address?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  original_vesting?: Maybe<Scalars['_coin']>;
  start_time?: Maybe<Scalars['timestamp']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Vesting_Account_Stddev_Fields = {
  __typename?: 'vesting_account_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vesting_account" */
export type Vesting_Account_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vesting_Account_Stddev_Pop_Fields = {
  __typename?: 'vesting_account_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vesting_account" */
export type Vesting_Account_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vesting_Account_Stddev_Samp_Fields = {
  __typename?: 'vesting_account_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vesting_account" */
export type Vesting_Account_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** Streaming cursor of the table "vesting_account" */
export type Vesting_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vesting_Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vesting_Account_Stream_Cursor_Value_Input = {
  address?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  original_vesting?: Maybe<Scalars['_coin']>;
  start_time?: Maybe<Scalars['timestamp']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Vesting_Account_Sum_Fields = {
  __typename?: 'vesting_account_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vesting_account" */
export type Vesting_Account_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "vesting_account" */
export enum Vesting_Account_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  Id = 'id',
  /** column name */
  OriginalVesting = 'original_vesting',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Type = 'type'
}

export type Vesting_Account_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Vesting_Account_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Vesting_Account_Set_Input>;
  where: Vesting_Account_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vesting_Account_Var_Pop_Fields = {
  __typename?: 'vesting_account_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vesting_account" */
export type Vesting_Account_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vesting_Account_Var_Samp_Fields = {
  __typename?: 'vesting_account_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vesting_account" */
export type Vesting_Account_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vesting_Account_Variance_Fields = {
  __typename?: 'vesting_account_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vesting_account" */
export type Vesting_Account_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "vesting_period" */
export type Vesting_Period = {
  __typename?: 'vesting_period';
  amount: Scalars['_coin'];
  length: Scalars['bigint'];
  period_order: Scalars['bigint'];
  /** An object relationship */
  vesting_account: Vesting_Account;
  vesting_account_id: Scalars['bigint'];
};

/** aggregated selection of "vesting_period" */
export type Vesting_Period_Aggregate = {
  __typename?: 'vesting_period_aggregate';
  aggregate?: Maybe<Vesting_Period_Aggregate_Fields>;
  nodes: Array<Vesting_Period>;
};

export type Vesting_Period_Aggregate_Bool_Exp = {
  count?: Maybe<Vesting_Period_Aggregate_Bool_Exp_Count>;
};

export type Vesting_Period_Aggregate_Bool_Exp_Count = {
  arguments?: Maybe<Array<Vesting_Period_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Vesting_Period_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vesting_period" */
export type Vesting_Period_Aggregate_Fields = {
  __typename?: 'vesting_period_aggregate_fields';
  avg?: Maybe<Vesting_Period_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Vesting_Period_Max_Fields>;
  min?: Maybe<Vesting_Period_Min_Fields>;
  stddev?: Maybe<Vesting_Period_Stddev_Fields>;
  stddev_pop?: Maybe<Vesting_Period_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vesting_Period_Stddev_Samp_Fields>;
  sum?: Maybe<Vesting_Period_Sum_Fields>;
  var_pop?: Maybe<Vesting_Period_Var_Pop_Fields>;
  var_samp?: Maybe<Vesting_Period_Var_Samp_Fields>;
  variance?: Maybe<Vesting_Period_Variance_Fields>;
};


/** aggregate fields of "vesting_period" */
export type Vesting_Period_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vesting_Period_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vesting_period" */
export type Vesting_Period_Aggregate_Order_By = {
  avg?: Maybe<Vesting_Period_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vesting_Period_Max_Order_By>;
  min?: Maybe<Vesting_Period_Min_Order_By>;
  stddev?: Maybe<Vesting_Period_Stddev_Order_By>;
  stddev_pop?: Maybe<Vesting_Period_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vesting_Period_Stddev_Samp_Order_By>;
  sum?: Maybe<Vesting_Period_Sum_Order_By>;
  var_pop?: Maybe<Vesting_Period_Var_Pop_Order_By>;
  var_samp?: Maybe<Vesting_Period_Var_Samp_Order_By>;
  variance?: Maybe<Vesting_Period_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vesting_period" */
export type Vesting_Period_Arr_Rel_Insert_Input = {
  data: Array<Vesting_Period_Insert_Input>;
};

/** aggregate avg on columns */
export type Vesting_Period_Avg_Fields = {
  __typename?: 'vesting_period_avg_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vesting_period" */
export type Vesting_Period_Avg_Order_By = {
  length?: Maybe<Order_By>;
  period_order?: Maybe<Order_By>;
  vesting_account_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vesting_period". All fields are combined with a logical 'AND'. */
export type Vesting_Period_Bool_Exp = {
  _and?: Maybe<Array<Vesting_Period_Bool_Exp>>;
  _not?: Maybe<Vesting_Period_Bool_Exp>;
  _or?: Maybe<Array<Vesting_Period_Bool_Exp>>;
  amount?: Maybe<_Coin_Comparison_Exp>;
  length?: Maybe<Bigint_Comparison_Exp>;
  period_order?: Maybe<Bigint_Comparison_Exp>;
  vesting_account?: Maybe<Vesting_Account_Bool_Exp>;
  vesting_account_id?: Maybe<Bigint_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "vesting_period" */
export type Vesting_Period_Inc_Input = {
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "vesting_period" */
export type Vesting_Period_Insert_Input = {
  amount?: Maybe<Scalars['_coin']>;
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account?: Maybe<Vesting_Account_Obj_Rel_Insert_Input>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Vesting_Period_Max_Fields = {
  __typename?: 'vesting_period_max_fields';
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "vesting_period" */
export type Vesting_Period_Max_Order_By = {
  length?: Maybe<Order_By>;
  period_order?: Maybe<Order_By>;
  vesting_account_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vesting_Period_Min_Fields = {
  __typename?: 'vesting_period_min_fields';
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "vesting_period" */
export type Vesting_Period_Min_Order_By = {
  length?: Maybe<Order_By>;
  period_order?: Maybe<Order_By>;
  vesting_account_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "vesting_period" */
export type Vesting_Period_Mutation_Response = {
  __typename?: 'vesting_period_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vesting_Period>;
};

/** Ordering options when selecting data from "vesting_period". */
export type Vesting_Period_Order_By = {
  amount?: Maybe<Order_By>;
  length?: Maybe<Order_By>;
  period_order?: Maybe<Order_By>;
  vesting_account?: Maybe<Vesting_Account_Order_By>;
  vesting_account_id?: Maybe<Order_By>;
};

/** select columns of table "vesting_period" */
export enum Vesting_Period_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Length = 'length',
  /** column name */
  PeriodOrder = 'period_order',
  /** column name */
  VestingAccountId = 'vesting_account_id'
}

/** input type for updating data in table "vesting_period" */
export type Vesting_Period_Set_Input = {
  amount?: Maybe<Scalars['_coin']>;
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Vesting_Period_Stddev_Fields = {
  __typename?: 'vesting_period_stddev_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Order_By = {
  length?: Maybe<Order_By>;
  period_order?: Maybe<Order_By>;
  vesting_account_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vesting_Period_Stddev_Pop_Fields = {
  __typename?: 'vesting_period_stddev_pop_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Pop_Order_By = {
  length?: Maybe<Order_By>;
  period_order?: Maybe<Order_By>;
  vesting_account_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vesting_Period_Stddev_Samp_Fields = {
  __typename?: 'vesting_period_stddev_samp_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Samp_Order_By = {
  length?: Maybe<Order_By>;
  period_order?: Maybe<Order_By>;
  vesting_account_id?: Maybe<Order_By>;
};

/** Streaming cursor of the table "vesting_period" */
export type Vesting_Period_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vesting_Period_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vesting_Period_Stream_Cursor_Value_Input = {
  amount?: Maybe<Scalars['_coin']>;
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Vesting_Period_Sum_Fields = {
  __typename?: 'vesting_period_sum_fields';
  length?: Maybe<Scalars['bigint']>;
  period_order?: Maybe<Scalars['bigint']>;
  vesting_account_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "vesting_period" */
export type Vesting_Period_Sum_Order_By = {
  length?: Maybe<Order_By>;
  period_order?: Maybe<Order_By>;
  vesting_account_id?: Maybe<Order_By>;
};

export type Vesting_Period_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Vesting_Period_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Vesting_Period_Set_Input>;
  where: Vesting_Period_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vesting_Period_Var_Pop_Fields = {
  __typename?: 'vesting_period_var_pop_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vesting_period" */
export type Vesting_Period_Var_Pop_Order_By = {
  length?: Maybe<Order_By>;
  period_order?: Maybe<Order_By>;
  vesting_account_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vesting_Period_Var_Samp_Fields = {
  __typename?: 'vesting_period_var_samp_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vesting_period" */
export type Vesting_Period_Var_Samp_Order_By = {
  length?: Maybe<Order_By>;
  period_order?: Maybe<Order_By>;
  vesting_account_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vesting_Period_Variance_Fields = {
  __typename?: 'vesting_period_variance_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vesting_period" */
export type Vesting_Period_Variance_Order_By = {
  length?: Maybe<Order_By>;
  period_order?: Maybe<Order_By>;
  vesting_account_id?: Maybe<Order_By>;
};
