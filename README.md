# democicd050624 — AWS CDK CI/CD Pipeline Demo

A demonstration project for building and deploying AWS infrastructure using the **AWS Cloud Development Kit (CDK)** with **TypeScript**. This repo (`demoawspipeline`) serves as a starting point for CDK-based CI/CD pipeline development on AWS.

---

## Overview

This project was bootstrapped as a blank CDK TypeScript application. It provides the foundational structure to define, synthesize, and deploy AWS CloudFormation stacks programmatically using TypeScript constructs.

| Detail             | Value                  |
| ------------------ | ---------------------- |
| **Package Name**   | `demoawspipeline`      |
| **Version**        | `0.1.0`                |
| **CDK Version**    | `2.1119.0`             |
| **CDK Lib**        | `aws-cdk-lib ^2.248.0` |
| **Language**       | TypeScript `~5.9.3`    |
| **Test Framework** | Jest `^30`             |

---

## Project Structure

```
democicd050624/
├── bin/                  # Entry point for the CDK app
├── lib/                  # CDK stack definitions
├── test/                 # Jest unit tests
├── cdk.json              # CDK app configuration
├── jest.config.js        # Jest test configuration
├── tsconfig.json         # TypeScript compiler options
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [AWS CLI](https://aws.amazon.com/cli/) configured with credentials
- [AWS CDK CLI](https://docs.aws.amazon.com/cdk/v2/guide/cli.html) installed globally:

```bash
npm install -g aws-cdk
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Bootstrap your AWS environment (first time only)

```bash
npx cdk bootstrap
```

---

## Useful Commands

| Command          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `npm run build`  | Compile TypeScript to JavaScript                        |
| `npm run watch`  | Watch for changes and auto-compile                      |
| `npm run test`   | Run Jest unit tests                                     |
| `npx cdk deploy` | Deploy the stack to your default AWS account/region     |
| `npx cdk diff`   | Compare the deployed stack with the current local state |
| `npx cdk synth`  | Emit the synthesized CloudFormation template            |

---

## Dependencies

### Runtime

- **`aws-cdk-lib`** (`^2.248.0`) — Core AWS CDK construct library
- **`constructs`** (`^10.5.0`) — Base class library for CDK constructs

### Development

- **`aws-cdk`** (`2.1119.0`) — CDK CLI toolchain
- **`typescript`** (`~5.9.3`) — TypeScript compiler
- **`ts-node`** — TypeScript execution for Node.js
- **`jest`** + **`ts-jest`** — Testing framework and TypeScript integration
- **`@types/jest`**, **`@types/node`** — TypeScript type definitions

---

## CI/CD Pipeline

This project is structured to support AWS-native CI/CD workflows. You can extend the `lib/` directory to define pipeline stacks using constructs such as:

- `aws-cdk-lib/aws-codepipeline`
- `aws-cdk-lib/aws-codebuild`
- `aws-cdk-lib/aws-codedeploy`

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

This project is for demonstration purposes. See repository owner for licensing details.
