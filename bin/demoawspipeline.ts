#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { DemoawspipelineStack } from "../lib/demoawspipeline-stack";

const app = new cdk.App();
new DemoawspipelineStack(app, "DemoawspipelineStack", {
  env: { account: "404167069202", region: "us-east-2" },
});
