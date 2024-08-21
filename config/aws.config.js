import siteConfig from './siteConfig';

export const cRegion = 'us-east-1'; // Cognito Region

export const credentials = {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
};

export const S3PoolConf = {
    Auth: {
        identityPoolId: siteConfig.constants.identityPoolId,
        region: cRegion,
        userPoolId: siteConfig.constants.userPoolId,
        userPoolWebClientId: siteConfig.constants.userPoolWebClientId,
        bucket: siteConfig.constants.bucket,
    },
    Storage: {
        AWSS3: {
            bucket: siteConfig.constants.bucket,
            region: cRegion,
            // REQUIRED Amazon Cognito Identity Pool ID
            identityPoolId: siteConfig.constants.identityPoolId,
        },
    },
};
