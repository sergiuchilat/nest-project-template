import { PlayerService } from './player.service';
import { Response } from 'express';
import { PlayerCreatePayloadDto } from "./dto/player.create.payload.dto";
import { PlayerCreateResponseDto } from "./dto/player.create.response.dto";
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    getAll(response: Response): Promise<void>;
    getOneById(id: number, response: Response): Promise<void>;
    getOneByUUId(uuid: string, response: Response): Promise<void>;
    create(player: PlayerCreatePayloadDto): Promise<PlayerCreateResponseDto>;
    delete(id: number, response: Response): Promise<void>;
}
