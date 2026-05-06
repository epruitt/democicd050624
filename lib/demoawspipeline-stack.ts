import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // AWS CI/CD Pipelines
    const pipeline = new CodePipeline(this, "demoPipeline", {
      synth: new ShellStep("Synth", {
        //use connection created using AWS console to authenticate to gitHub
        input: CodePipelineSource.gitHub("epruitt/democicd050624", "main"),
        commands: ["npm ci", "npm run build", "npx cdk synth"],
      }),
    });
  }
}
