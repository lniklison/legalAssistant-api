CREATE TABLE `dbo`.`user` (
  `Id` INT NOT NULL,
  `FirstName` VARCHAR(45) NULL,
  `LastName` VARCHAR(45) NULL,
  `Email` VARCHAR(45) NULL,
  `GovId` VARCHAR(45) NULL,
  `IdType` INT NULL,
  `Password` VARCHAR(45) NULL,
  `Active` TINYINT NULL,
  PRIMARY KEY (`Id`));
