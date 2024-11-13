
import { GenerateEmbedUrlForAnonymousUserCommand, ListDashboardsCommand } from "@aws-sdk/client-quicksight";
import { getAwsDefaultParams, getQuickClient } from "../utils/awsConfig.js";

const getDashboardDetails = async ({ client }) => {
    const params = getAwsDefaultParams();
    const command = new ListDashboardsCommand(params);

    try {
        const data = await client.send(command);

        return data;
    } catch (error) {
        throw error;
    }
}

const getEmbedDashboardUrl = async ({ client, DashboardId, Arn }) => {
    const params = { 
        ...getAwsDefaultParams(),
        Namespace: "default",
        DashboardId,
        AuthorizedResourceArns: [Arn],
        ExperienceConfiguration: {
          Dashboard: {
            EmbedType: 'dashboard',   
            InitialDashboardId: DashboardId,
          }
        }
      };

      console.log(params)
      const command = new GenerateEmbedUrlForAnonymousUserCommand(params);
      const response = await client.send(command);

      console.log(params)
}

export const getUrlController = async (req, res) => {
    try {
        const client = getQuickClient();
        const data = await getDashboardDetails({ client });

        const { DashboardId, Arn } = data.DashboardSummaryList[0];
        console.log(Arn)
        const urlData = await getEmbedDashboardUrl({ client, DashboardId, Arn });

        res.json({
            data
        });
    } catch (error) {
        console.log(error);
    }
}