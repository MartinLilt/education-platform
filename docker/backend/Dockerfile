# Use the official ASP.NET Core runtime as a parent image
FROM mcr.microsoft.com/dotnet/aspnet:5.0

WORKDIR /app

# Copy the published application to the working directory
COPY ./bin/Release/net5.0/publish/ .

EXPOSE 80

ENTRYPOINT ["dotnet", "YourApp.dll"]
