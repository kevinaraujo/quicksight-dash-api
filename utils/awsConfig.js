import { QuickSightClient } from '@aws-sdk/client-quicksight';

export const getAwsConfig = () => ({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
})

export const getQuickClient = () => new QuickSightClient(getAwsConfig())

export const getAwsDefaultParams = () => ({
    AwsAccountId: process.env.AWS_ACCOUNT_ID
})