import * as cdk from "aws-cdk-lib/core";
import { Construct } from "constructs";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { PipelineAppStage } from "./demoawspipeline-app-stack";
import { ManualApprovalStep } from "aws-cdk-lib/pipelines";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // AWS CI/CD Pipelines
    const demoCiCdPipeline = new CodePipeline(this, "demoPipeline", {
      synth: new ShellStep("Synth", {
        //use connection created using AWS console to authenticate to gitHub
        input: CodePipelineSource.gitHub("epruitt/democicd050624", "main"),
        commands: ["npm ci", "npm run build", "npx cdk synth"],
      }),
    });

    // add stage to pipeline
    const testingStage = demoCiCdPipeline.addStage(
      new PipelineAppStage(this, "Test", {
        env: { account: "404167069202", region: "us-east-2" },
      }),
    );

    //Manual approval
    testingStage.addPost(new ManualApprovalStep("approval"));

    //add prod stage
    const prodStage = demoCiCdPipeline.addStage(
      new PipelineAppStage(this, "prod", {
        env: { account: "404167069202", region: "us-east-2" },
      }),
    );
  }
}
