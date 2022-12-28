import React, {useEffect} from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  TransactionsList,
  Box,
  LoadAndExist,
  TransactionListDetails,
} from '@components';
import { useRecoilValue } from 'recoil';
import { readTx } from '@recoil/settings';
import { useStyles } from './styles';
import { useTransactions } from './hooks';

const Transactions = () => {
  const txListFormat = useRecoilValue(readTx);
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const {
    state,
    loadNextPage,
  } = useTransactions();
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.items.length;
  const itemCount = state.hasNextPage ? state.items.length + 1 : state.items.length;

  useEffect(()=>{
    console.log(">>>>>>>>>>>", state.items);
  }, [state.items.length])
  return (
    <>
      <NextSeo
        title={t('transactions')}
        openGraph={{
          title: t('transactions'),
        }}
      />
      <Layout
        navTitle={t('transactions')}
        className={classes.root}
      >
        <LoadAndExist
          exists={state.exists}
          loading={state.loading}
        >
        
              <TransactionListDetails
                transactions={state.items}
                itemCount={itemCount}
                hasNextPage={state.hasNextPage}
                isNextPageLoading={state.isNextPageLoading}
                loadNextPage={loadNextPage}
                loadMoreItems={loadMoreItems}
                isItemLoaded={isItemLoaded}
              />
          
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Transactions;
