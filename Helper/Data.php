<?php
/*
 * @category: Magepow
 * @copyright: Copyright (c) 2014 Magepow (http://www.magepow.com/)
 * @licence: http://www.magepow.com/license-agreement
 * @author: MichaelHa
 * @create date: 2019-06-14 17:19:50
 * @LastEditors: MichaelHa
 * @LastEditTime: 2019-06-29 12:45:32
 */
namespace Magepow\Stickycart\Helper;

class Data extends \Magento\Framework\App\Helper\AbstractHelper
{
    public function getHeightScroll()
    {
        return $this->scopeConfig->getValue(
            'stickycart/addtocart_bottom/height_scroll',
            \Magento\Store\Model\ScopeInterface::SCOPE_STORE
        );
    }
}