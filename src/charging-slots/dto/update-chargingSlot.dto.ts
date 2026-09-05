import { PartialType } from "@nestjs/mapped-types";
import { CreateChargingSlotDto } from "./create-chargingSlot.dto";

export class UpdateChargingSlotDto extends PartialType(
    CreateChargingSlotDto,
) {}