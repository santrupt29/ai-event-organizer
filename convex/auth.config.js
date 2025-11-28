export default {
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
      audience: process.env.CLERK_JWT_AUDIENCE,
    },
  ],
};