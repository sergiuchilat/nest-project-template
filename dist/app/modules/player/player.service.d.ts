import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { PlayerItemDto } from './dto/player.item.dto';
import { PlayerCreatePayloadDto } from "./dto/player.create.payload.dto";
import { PlayerCreateResponseDto } from "./dto/player.create.response.dto";
export declare class PlayerService {
    private playerRepository;
    constructor(playerRepository: Repository<Player>);
    getAll(): Promise<PlayerItemDto[]>;
    getOneById(id: number): Promise<Player | undefined>;
    getOneByUUId(uuid: string): Promise<Player | undefined>;
    create(player: PlayerCreatePayloadDto): Promise<PlayerCreateResponseDto>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
