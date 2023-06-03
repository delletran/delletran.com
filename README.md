This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

1.
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

2.
```bash
./pocketbase serve
```


Alternatively:
If you are using vscode for your ocode editor, 
1. Add `restore terminal` to your vscode extension
2. Create file `.vscode/settings.json`
3. Add and save the following commands to your `.vscode/settings.json`:
```
{
  "restoreTerminals.terminals": [
    {
      "splitTerminals": [
        {
          "name": "client",
          "commands": ["npm run dev"],
          "shouldRunCommands": true
        },
        {
          "name": "server",
          "commands": ["./pocketbase serve"],
          "shouldRunCommands": true
        }
      ]
    }
  ]
}
```

### Client
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Server
Open [http://127.0.0.1:8090/api/<...>](http://127.0.0.1:8090/api/) to see REST API the result.
Open [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/) for Admin UI.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Documentation

- [Figma](https://www.figma.com/file/81PXuLLsOWUrS9DVIiEHCx/delletran.com?type=design&node-id=0-1&t=dFrnLpxW5niGld3o-0) - Website Design