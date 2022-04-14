/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */

import { Controller, Get, Post, Query } from '@nestjs/common';
import AppResult from 'src/modules/AppResult';

@Controller('activity')
export class ActivityController {
  constructor(private readonly appService: ActivityController) {}
  // 活动列表
  @Get('activitys')
  queryActivitys(): Promise<AppResult> {
    return this.appService.queryActivitys();
  }

  // 活动详情
  @Get('detail')
  queryDetail(@Query('id') id: number) {

  }

  // 创建/更新活动
  @Post('create')
  createActivity() {

  }

  // 创建/更新活动
  @Post('update')
  upadteActivity() {

  }

  // 删除/撤销活动
  // 创建/更新活动
  @Get('delete_or_down')
  deleteOrDown(@Query('id') id: number) {

  }

  // 添加标签
  @Post('create_tag')
  createTag() {

  }

  // 添加标签
  @Post('update_tag')
  upadteTag() {

  }

  // 删除标签
  @Get('delete_tag')
  deleteTag(@Query('id') id: number) {

  }
}
